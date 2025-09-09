UserProfileCard.tsx
    รับ Props:
    user: UserData → ข้อมูลผู้ใช้ (id, name, email, avatarUrl, isOnline, skills)
    onViewDetails: (userId) => void → ฟังก์ชันที่ทำงานเมื่อกดปุ่ม
    แสดงข้อมูลผู้ใช้:
    รูปโปรไฟล์ (ใช้ placeholder ถ้าไม่มี avatarUrl)
    ชื่อ, email
    สถานะ (ออนไลน์/ออฟไลน์) พร้อมสี
    ทักษะทั้งหมด (เรียกใช้ SkillTag สำหรับแต่ละทักษะ)
    ปุ่ม ดูรายละเอียด

UserProfileCard.css
    จัดการสไตล์ของบัตรผู้ใช้:
    การ์ดมี border, shadow, padding
    รูปโปรไฟล์เป็นวงกลม
    แสดงชื่อเป็นหัวข้อใหญ่ ตัวหนา
    สีเขียวสำหรับ ออนไลน์ และสีเทาสำหรับ ออฟไลน์
    ปุ่ม "ดูรายละเอียด" เป็นสีน้ำเงิน + hover เปลี่ยนสีเข้ม

SkillTag.tsx
    Component สำหรับแสดง “ทักษะ” ของผู้ใช้
    Props:
    skillName: string → ชื่อทักษะ
    level?: "Beginner" | "Intermediate" | "Advanced" → ระดับของทักษะ (ไม่บังคับ)
    เพิ่ม class ตามระดับ เพื่อเปลี่ยนสี background ของแต่ละ tag
    ตัวอย่าง:
    Beginner = เหลือง
    Intermediate = ฟ้า
    Advanced = เขียว

SkillTag.css
    กำหนด style ของ tag:
    มี padding, border-radius ให้ดูเป็นกล่องเล็กๆ
    สีแตกต่างตามระดับความสามารถ
    ตัวอักษรเล็กและอ่านง่าย
