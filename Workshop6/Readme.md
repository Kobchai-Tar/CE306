Workshop6.1
การทำงาน
    ProductCard.tsx เป็น Component สำหรับแสดงสินค้า 1 ชิ้น
    แสดงรูปสินค้า (imageUrl)
    ชื่อสินค้า (title)
    รายละเอียด (description)
    ราคา (price)
    ปุ่ม Add to Cart (กดแล้วเรียก onAddToCart)
    App.tsx เก็บ array ของสินค้า แล้วใช้ .map() เพื่อสร้างการ์ดหลายใบ (Product List)
Tailwind (ผ่าน ProductCard.css + App.css)
    ProductCard.css ใช้ @apply เพื่อรวม utility class เช่น
    .product-card → กำหนดพื้นหลัง ขอบมน เงา
    .btn-add → ปุ่ม Add to Cart พร้อม hover effect
    App.css
    .app-container → พื้นหลังเทาอ่อน (bg-gray-100)
    .product-list → ใช้ grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 เพื่อทำ layout responsive

Workshop6.2
การทำงาน
    Navbar.tsx เป็น Component แสดงเมนูนำทาง (Navigation Bar)
    ใช้ useState ควบคุมปุ่ม Hamburger menu สำหรับแสดง/ซ่อนเมนูเมื่อจอเล็ก (Responsive)
    ใน Desktop (md: ขึ้นไป) จะแสดงเมนูเป็นแถวแนวนอน
    ใน Mobile (< md) จะแสดงปุ่ม ☰ (หรือไอคอน Menu) เพื่อกดเปิด/ปิดเมนู
    กดปุ่มแล้วสลับค่า isOpen → แสดงเมนูแบบ Mobile
Tailwind (ผ่าน Navbar.css)
    ใช้ @apply จัด style เช่น bg-blue-600, flex, gap-6
    มี hover effect ให้เมนูเปลี่ยนสีเมื่อเอาเมาส์ชี้
