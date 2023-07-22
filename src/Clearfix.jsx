import React from 'react'

function Clearfix() {
  return (
    <>
        <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro2.jpg" alt="..." />
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Fresh Coffee</span>
                            <span class="section-heading-lower">Worth Drinking</span>
                        </h2>
                        <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
                        <p class="mb-3">กาแฟฝีมือคุณภาพทุกแก้วของเราเริ่มต้นด้วยวัตถุดิบที่คัดสรรในท้องถิ่น เมื่อคุณได้ลองแล้ว กาแฟของเราจะช่วยเพิ่มความสุขให้กับชีวิตประจำวันของคุณ - เรารับประกันได้!</p>
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Clearfix