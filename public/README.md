This is the `public` directory. 

Any file you place in here will be served at the root URL path.

**How to add your Nissan GTR 3D model:**
1. Upload your `.glb` file (e.g., `nissan_gtr.glb`) directly into this folder.
2. In your React code (`/src/components/Showcase3D.tsx`), load it using `useGLTF('/nissan_gtr.glb')`. 
   
Vite automatically knows to look in the `public` folder for anything starting with `/`!
