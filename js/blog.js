const blog = document.getElementById('blog-body');
let hasCancer = localStorage.getItem('hasCancer');
if (hasCancer=="true") {
    blog.innerHTML = `
    <h2 class="mt-5">اثناء العلاج</h2 class="mt-5">
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">  يجب عليها تجنب رفع الاشياء الثقيله او القيام بالمهام المنزليه الشاقه </h5>
        <div class="num-cercle">
            <h6 class="m-0">1</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">الحصول علي قسط كاف من النوم</h5>
        <div class="num-cercle">
            <h6 class="m-0">2</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">الابتعاد عن المشروبات التي تحتوي علي كافيين</h5>
        <div class="num-cercle">
            <h6 class="m-0">3</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            للتخفيف من اعراض الغثيان مع العلاج الكيماوي او الاشعاعي يمكن تناول وجبة خفيفه قبل جلسة العلاج
            <br>
            بالاضافه الي تناول ٥ او ٦ وجبات خفيفه بدلا من ثلاث وجبات كبيره

        </h5>
        <div class="num-cercle">
            <h6 class="m-0">4</h6>
        </div>
    </div>


    <h2 class="mt-5">نصائح للتعامل مع الاعراض النفسيه</h2>

    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            اولا يجب التنويه الي امكانية تحقيق العلاج  والتعافي التام من الاصابة بسرطان الثدي  خاصة عند الكشف
            <br>
            عنه في مراحل مبكره

        </h5>
        <div class="num-cercle">
            <h6 class="m-0">1</h6>
        </div>
    </div>

    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            التحدث مع الاخرين للحصول علي الدعم والمساعده او التوجه الي مرشد نفسي

        </h5>
        <div class="num-cercle">
            <h6 class="m-0">2</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            ممارسة الانشطه التي تحبها في الايام التي تكون فيها اكثر نشاطا والاستراحه في الايام التي تشعر فيها
            <br>
            بالارهاق
        </h5>
        <div class="num-cercle">
            <h6 class="m-0">3</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            تجنب لوم الذات
        </h5>
        <div class="num-cercle">
            <h6 class="m-0">4</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            يجب علي المريض ان يكون بمعرفة تامه بطبيعة العلاج الذي سيخضع له
        </h5>
        <div class="num-cercle">
            <h6 class="m-0">5</h6>
        </div>
    </div>
   
    <h2 class="mt-5">بعد التعافي</h2>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            يجب اجراء الفحوصات الطبيه بشكل منتظم بعد الانتهاء من العلاج بشكل دوري كل (٣_٦ ) شهور لمده تتراوح بين
            <br>
            سنه الي سنتين يتضمن ذلك فحوصات الدم والتصوير بالاشعه السينيه

        </h5>
        <div class="num-cercle">
            <h6 class="m-0">1</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            والخضوع لتصوير الثدي الشعاعي mammogram كل سنه لمدة ٥ سنوات بعد الانتهاء من العلاج

        </h5>
        <div class="num-cercle">
            <h6 class="m-0">2</h6>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center mt-3">
        <h5 class="m-0">
            يتم اخضاعها بعد العلاج لبعض العمليات التجميليه والترميمه مثل ترميم او زراعة الثدي
        </h5>
        <div class="num-cercle">
            <h6 class="m-0">3</h6>
        </div>
    </div>
    `;
} else {
    blog.innerHTML = `
    <h2>للوقايه او تقليل فرص الاصابه</h2>
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">ممارسة التمارين الرياضية المعتدلة</h5>
                <div class="num-cercle">
                    <h6 class="m-0">1</h6>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">ارتداء حمالة صدر صحيحة</h5>
                <div class="num-cercle">
                    <h6 class="m-0">2</h6>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">التحكم فى وزنك</h5>
                <div class="num-cercle">
                    <h6 class="m-0">3</h6>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">تجنب المشروبات الغازية</h5>
                <div class="num-cercle">
                    <h6 class="m-0">4</h6>
                </div>
            </div>
        
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">
                    النظام الغذائي يلعب دورا كبيرا في الإصابة بالسرطان أو الوقاية منه بتناول الأطعمة الغنية بمضادات
                    <br>
                    الأكسدة التي تقاومه مثل الجوز ، الشاي الاخضر ، السبانخ ،الزنجبيل، التفاح ،عصير البروكلي
                </h5>
                <div class="num-cercle">
                    <h6 class="m-0">5</h6>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mt-3">
                <h5 class="m-0">
                    و هناك مجموعة من المواد الغذائية التي تضاعف من فرص الإصابة بالسرطان، على رأسها اللحوم المصنعة أو
                    <br>
                    الحمراء والأطعمة المقلية والمعلبة والجاهزة والوجبات السريعة يجب تجنبها والحد من تناولها
                </h5>
                <div class="num-cercle">
                    <h6 class="m-0">6</h6>
                </div>
            </div>
    `;
}