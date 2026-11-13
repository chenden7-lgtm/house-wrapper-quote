/**
 * Custom Product Overrides Manager
 * Persists backend/admin adjustments to localStorage and syncs with ACCESSORIES.
 */

export const OVERRIDES_STORAGE_KEY = 'tesla_custom_product_overrides';

export function getCustomOverrides() {
  try {
    const raw = localStorage.getItem(OVERRIDES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('getCustomOverrides error:', e);
    return {};
  }
}

export function saveCustomOverride(productId, data) {
  try {
    const overrides = getCustomOverrides();
    overrides[productId] = {
      ...(overrides[productId] || {}),
      ...data,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('customOverridesUpdated', { detail: { productId, data } }));
    }
    return true;
  } catch (e) {
    console.error('saveCustomOverride error:', e);
    return false;
  }
}

export function removeCustomOverride(productId) {
  try {
    const overrides = getCustomOverrides();
    if (overrides[productId]) {
      delete overrides[productId];
      localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('customOverridesUpdated', { detail: { productId } }));
      }
    }
    return true;
  } catch (e) {
    console.error('removeCustomOverride error:', e);
    return false;
  }
}

export function clearAllCustomOverrides() {
  try {
    localStorage.removeItem(OVERRIDES_STORAGE_KEY);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('customOverridesUpdated', { detail: {} }));
    }
  } catch (e) {
    console.error('clearAllCustomOverrides error:', e);
  }
}

export function applyCustomOverrides(products) {
  if (!products || !Array.isArray(products)) return;
  const overrides = getCustomOverrides();
  if (Object.keys(overrides).length === 0) return;

  products.forEach(p => {
    const ov = overrides[p.id];
    if (ov) {
      if (ov.name !== undefined) p.name = ov.name;
      if (ov.price !== undefined) p.price = ov.price;
      if (ov.originalPrice !== undefined) p.originalPrice = ov.originalPrice;
      if (ov.partsPrice !== undefined) p.partsPrice = ov.partsPrice;
      if (ov.installFee !== undefined) p.installFee = ov.installFee;
      if (ov.isPendingConfirm !== undefined) p.isPendingConfirm = ov.isPendingConfirm;
      if (ov.priceRange !== undefined) p.priceRange = ov.priceRange;
      if (ov.description !== undefined) p.description = ov.description;
      if (ov.badge !== undefined) p.badge = ov.badge;

      if (ov.variants && Array.isArray(p.variants)) {
        p.variants.forEach(v => {
          const vOv = ov.variants[v.id];
          if (vOv) {
            if (vOv.title !== undefined) v.title = vOv.title;
            if (vOv.price !== undefined) v.price = vOv.price;
            if (vOv.partsPrice !== undefined) v.partsPrice = vOv.partsPrice;
            if (vOv.installFee !== undefined) v.installFee = vOv.installFee;
            if (vOv.isPendingConfirm !== undefined) v.isPendingConfirm = vOv.isPendingConfirm;
            if (vOv.priceRange !== undefined) v.priceRange = vOv.priceRange;
          }
        });
      }
      p.isCustomOverridden = true;
    }
  });
}

