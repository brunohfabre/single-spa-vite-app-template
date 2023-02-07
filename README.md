# Single SPA Vite app/parcel template

To use the template, clone the repository and change the name in the following places

- org -> single spa org name
- template -> application/parcel project name

&nbsp;

package.json:
```
"name": "@org/template"

"scripts": {
    "build": "tsc && vite build --base=/mfe/apps/auth/"
},
```
Change `--base=/mfe/apps/auth/` to your production path.

&nbsp;

vite.config.js:
```
input: 'src/org-template.tsx'

entryFileNames: 'org-template.js',
```

&nbsp;

change file name `src/org-template.tsx`