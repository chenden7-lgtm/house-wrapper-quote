import re

with open('quackev_main.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# find all Category GID links
gids = re.findall(r'gid=(\d+)', text)
unique_gids = sorted(list(set(gids)))
print('Found QuackEV category GIDs:', len(unique_gids), unique_gids)

# Find all info.php?id= product links on main page
ids = re.findall(r'info\.php\?id=(\d+)', text)
unique_ids = sorted(list(set(ids)))
print('Found direct product IDs on main page:', len(unique_ids))
