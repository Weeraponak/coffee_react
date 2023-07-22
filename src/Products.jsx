import React from 'react'

function Products() {
  return (
    <>
        <section class="page-section" id="products">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Blended to Perfection</span>
                                <span class="section-heading-lower">Coffees & Teas</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-01.jpg" alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p><br />
                        <p class="mb-0">เราภูมิใจในงานของเรา และมันแสดงให้เห็น ทุกครั้งที่คุณสั่งเครื่องดื่มจากเรา เรารับประกันว่าคุณจะได้รับประสบการณ์ที่คุ้มค่า ไม่ว่าจะเป็นคาปูชิโน่เวเนซุเอลาที่โด่งดังไปทั่วโลก ชาสมุนไพรเย็นชื่นใจ หรือกาแฟดำสูตรพิเศษสักถ้วย คุณจะกลับมาอีก</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex me-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Delicious Treats, Good Eats</span>
                                <span class="section-heading-lower">Bakery & Kitchen</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-02.jpg" alt="..." />
                    <div class="product-item-description d-flex ms-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p><br />
                        <p class="mb-0">เมนูตามฤดูกาลของเรามีของว่างแสนอร่อย ขนมอบ และแม้แต่อาหารเต็มรูปแบบที่สมบูรณ์แบบสำหรับมื้อเช้าหรือมื้อกลางวัน เราจัดหาวัตถุดิบจากฟาร์มออแกนิกในท้องถิ่นทุกครั้งที่ทำได้ ควบคู่ไปกับผู้ขายระดับพรีเมียมสำหรับสินค้าพิเศษ</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">From Around the World</span>
                                <span class="section-heading-lower">Bulk Speciality Blends</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-03.jpg" alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">Travelling the world for the very best quality coffee is something take pride in. When you visit us, you'll always find new blends from around the world, mainly from  Thailand. We sell our blends in smaller to large bulk quantities. Please visit us in person for more details.</p><br />
                        <p class="mb-0">การเดินทางรอบโลกเพื่อลิ้มรสกาแฟคุณภาพเยี่ยมเป็นสิ่งที่น่าภาคภูมิใจ เมื่อคุณมาเยือนเรา คุณจะพบกาแฟเบลนด์ใหม่ๆ จากทั่วโลก ส่วนใหญ่มาจากประเทศไทย เราจำหน่ายส่วนผสมของเราในปริมาณที่น้อยไปจนถึงปริมาณมาก โปรดเยี่ยมชมเราด้วยตนเองสำหรับรายละเอียดเพิ่มเติม</p></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products