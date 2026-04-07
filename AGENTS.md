# Six Flavors Spirits - Project Documentation

## Project Overview
**Six Flavors Spirits** is an interactive web application showcasing a collection of 6 unique characters representing fundamental tastes. The project focuses on character design, lore, and a polished user interface.

## Characters
1. **Podra (Sweet)** - Color: `#FFD25A`. Lore: วาทยากรไฟที่ทำให้ทุกอย่างลงตัวพอดีคำ
2. **Paka (Sour)** - Color: `#7BA65E`. Lore: ผู้พิทักษ์สมุนไพรจากป่าฝั่งตะวันตก
3. **Leviathan (Salty)** - Color: `#4A8B8B`. Lore: ผู้พิทักษ์ชุมชนริมทะเลอันดามัน
4. **Aurelan (Bitter)** - Color: `#D4AF37`. Lore: ผู้คุมสมดุลจากครัวย่านกาดเมืองเหนือ
5. **Zarya (Spicy)** - Color: `#A64B2A`. Lore: พลังชีวิตจากวงตำส้มตำทุ่งอีสาน
6. **Kappi (Umami)** - Color: `#5C4033`. Lore: ตัวแทนความพอดีคำ-พอดีใจจากสวนริมอ่าว

## Technical Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Motion (motion/react)
- **Icons**: Lucide React
- **Typography**: Outfit (Display), Inter (Sans)

## Key Features & Customizations
- **Interactive Collection**: Grid view with custom colored frames for each character.
- **Dynamic Detail View**: Lore and character stats with smooth transitions.
- **Process Page**: Showcases the concept, sketches, and character lineup.
- **Responsive Design**: Fully functional on mobile and desktop.
- **Social Integration**: Direct links to Facebook and Instagram profiles.
- **Image Optimization**: 
    - Global `image-rendering: crisp-edges` for clarity.
    - Specific scaling for **Kappi** (1.5x) to match other characters' visual weight.
    - `object-contain` used for sketches to prevent cropping.

## File Structure
- `/public/image/`: Final character illustrations.
- `/public/sketch/`: Concept sketches.
- `/src/components/`: Modular UI components for each page.
- `/src/constants.ts`: Source of truth for character data and lore.
- `/src/types.ts`: TypeScript definitions for the project.

## Maintenance Notes
- When adding new characters, update `CHARACTERS` array in `src/constants.ts`.
- Character images should be placed in `/public/image/` for direct access.
- Social links are managed in `src/components/Contact.tsx`.
