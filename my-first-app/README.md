# MyFirstApp

##Değişkenin TS Dosyasıyla HTML Dosyasında Kullanımı:
Angular'da, TypeScript dosyasında tanımlanan değişkenleri HTML dosyasında görüntülemek için tek yönlü ve çift yönlü veri bağlama kullanırız. Tek yönlü veri bağlama, değişkenlerin TypeScript dosyasından HTML dosyasına aktarılmasını sağlar ve değişkenleri HTML içinde kullanarak dinamik içerik oluşturabiliriz. Örneğin, <h1>Merhaba, {{ ad }}!</h1> şeklindeki kodla "ad" adlı değişkenin değeri ekranda görüntülenebilir. Çift yönlü veri bağlama ise, değişkenleri hem TypeScript'te hem de HTML'de kullanarak kullanıcıdan veri girişi almak ve verileri senkronize etmek için kullanılır. Bunun için [(ngModel)] direktifini kullanırız.

##Metot Oluşturma:
Angular bileşenlerinde TypeScript dosyasında metotlar oluşturarak işlevselliği sağlayabiliriz. Metotlar, bileşenin içinde belirli işlemleri gerçekleştirmek için kullanılır ve HTML dosyasından çağrılabilir. Örneğin, bir "save()" metodu oluşturup, <button (click)="save()">Kaydet</button> şeklinde HTML dosyasında çağırabiliriz. Bu şekilde metotlar, bileşenin kodunu daha düzenli ve modüler hale getirir.

##Kayıt ve Listeleme İşlemi (HTML Tarafında For Döngüsü Kullanımı):
Angular'da, *ngFor direktifi kullanarak liste içinde döngü yaparak verileri listelemek için kullanabiliriz. Bu direktif ile dizi veya koleksiyonlardaki verileri HTML içinde tekrarlayarak liste oluşturabiliriz. Örneğin, <li *ngFor="let kullanici of kullanicilar">{{ kullanici }}</li> şeklindeki kodla "kullanicilar" adlı dizi içindeki kullanıcıları listeleyebiliriz.

##Component Oluşturma:
Angular'da, uygulamayı parçalara bölmek için bileşenler oluşturabiliriz. Bileşenler, kendi içinde HTML şablonu ve TypeScript kodu bulunan modüler yapılar olarak düşünülebilir. Böylece uygulamayı daha küçük ve yönetilebilir parçalara ayırabiliriz. Bileşenler, @Component dekoratörü ile oluşturulur ve HTML dosyasıyla ilişkilendirilir.

##Componentleri İç İçe Kullanma:
Angular'da, bir bileşen içerisinde başka bir bileşeni kullanabiliriz. Bu, uygulamayı daha modüler hale getirir ve bileşenler arası iletişimi sağlar. Bir bileşen içinde diğer bileşenleri kullanarak karmaşık yapıları daha küçük parçalara bölebiliriz. Böylece her bir bileşeni bağımsız olarak tasarlayıp, ana bileşen içinde kullanabiliriz.

##Componentler Arası Veri Taşıma:
Angular'da bileşenler arasında veri taşımak için Input ve Output dekoratörlerini kullanırız. Input dekoratörü ile ana bileşenden alt bileşene veri gönderebiliriz. Output dekoratörü ile de alt bileşenden ana bileşene veri aktarabiliriz. Bu sayede bileşenler arasında veri paylaşımı gerçekleştirerek uygulamanın farklı parçalarının haberleşmesini sağlayabiliriz.





