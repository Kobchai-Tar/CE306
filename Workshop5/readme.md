**App.tsx**
เป็น component หลัก ของแอป
Import: Counter จาก CounterComponent.tsx
        UserForm จาก UserForm.tsx
        
Render: ส่วนแรก → <Counter initialCount={0} /> เริ่มต้นนับจาก 0
        ส่วนสอง → <UserForm /> สำหรับกรอกข้อมูลผู้ใช้

**CounterComponent.tsx**
เป็น functional component ใช้ useState เก็บค่า count
Props:
    initialCount?: number → กำหนดค่าเริ่มต้น (default = 0)
ฟังก์ชันหลัก:
    plus() → เพิ่มค่า count +1
    remove() → ลดค่า count -1
    reset() → รีเซ็ตกลับไปเป็น initialCount
Render:
    แสดงหัวข้อ "Counter Exercise - Solution"
    แสดงค่าปัจจุบัน (count)
    ปุ่ม + เพิ่ม, - ลด, Reset

**CounterComponent.css**
สไตล์ของ Counter:
    ตัวเลขขนาดใหญ่ (font-size: 48px, สีฟ้า)
ปุ่มมีสีแตกต่าง:
    btn-plus → เขียว
    btn-minus → แดง
    btn-reset → ส้ม
ปุ่มมี hover effect (opacity ลดลง)

**UserForm.tsx**
ใช้ useState เก็บข้อมูลฟอร์ม (formData) มี 2 ฟิลด์:
    name (ชื่อ)
    email (อีเมล)
ฟังก์ชันหลัก:
    handleChange → อัปเดตค่าฟอร์มตามการพิมพ์
    handleSubmit → กดปุ่มแล้วแสดงค่าใน alert
    handleClear → เคลียร์ค่าทั้งหมด (reset เป็นค่าว่าง)
Render:
    อินพุตกรอกชื่อ และอีเมล
    ปุ่ม Submit (เขียว) และ Clear (แดง)
    กล่องด้านล่างแสดงข้อมูลปัจจุบันแบบเรียลไทม์ (หรือข้อความ "ยังไม่ได้กรอก" ถ้าเว้นว่าง)
