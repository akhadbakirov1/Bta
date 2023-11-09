import React from 'react';
import { Link } from 'react-router-dom';
import './newsmaincomp.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NewsImg1 from '/public/Images/newsimg/649450f5d4b77.jpeg'
import NewsImg2 from '/public/Images/newsimg/6512e9656d204.jpeg'
import NewsImg3 from '/public/Images/newsimg/650da0b015ab2.jpeg'
import NewsImg4 from '/public/Images/newsimg/650da01342a12.jpeg'
import NewsImg5 from '/public/Images/newsimg/64c796fd72947.jpeg'
import NewsImg6 from '/public/Images/newsimg/64d37963e7069.jpeg'

 function NewsMainComp() {

  return (
    <>
   
      <div className="one">
      <hr />
            <h1 className='one-h1'>ბოლო სიახლეები</h1>
        <hr />
        </div>

        <div className="news-container-main-position">
    
        <div className="news-container">

            <div className="news-main-bg">
            <Link className='news-position' to='/newspage=1'>
          <div className="news-card-bg-blue">


        <Card className='news-card-main'>
      <Card.Img className='news-img' variant="top" src={NewsImg1} />
      <Card.Body>
        <Card.Title className='news-card-title'>ვორქშოპი „სამუშაოზე დაფუძნებული სწავლების მასშტაბის გაფართოება და კერძო სექტორთან თანამშრომლობა“</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        2023 წლის 19 ივნისს, პროფესიული უნარების სააგენტოს ორგანიზებით გაიმართება ვორქშოპი „სამუშაოზე დაფუძნებული სწავლების მასშტაბის გაფართოება და კერძო სექტორთან თანამშრომლობა“.

ვორქშოპზე განხილულ იქნა:

დუალური / კოოპერაციული სწავლება და

სასწავლო საწარმოს სტატუსი;

პარტნიორი ორგანიზაციის შერჩევა კოოპერაციული

სწავლებისთვის

პროფესიული სტუდენტის ჩანაწერების ჟურნალის

ადმინისტრირება

შეხვედრაზე მონაწილეებმა შეასრულეს პრაქტიკული სავარჯიშო სექტორთან

თანამშრომლობასთან დაკავშირებული გამოწვევები და მათი

გადაჭრის გზები

აღნიშნულ ვორქშოფს აკადემიის ხარისხის უზრუნველყოფის სამსახურის უფროსი ალინა კუპრავა დაესწრო
        </Card.Text>
      </Card.Body>
    </Card>
   
    </div>
    </Link>
    </div>

    <div className="news-main-bg">
    <Link className='news-position' to='newspage=2'>
    <div className="news-card-bg-blue">
    <Card className='news-card-main'>
      <Card.Img className='news-img'  variant="top" src={NewsImg2} />
      <Card.Body>
        <Card.Title className='news-card-title'>პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!

მოტივაციური გასაუბრების და პროფესიული ტესტირების საბოლოო შედეგები გამოცხადდება

 16 - 17 ოქტომბრიდან

პროფესიული საგანმანათლებლო პროგრამისა და პროფესიული საგანმანათლებლო დაწესებულების საბოლოო არჩევანის მონიშვნა შესაძლებელი იქნება 17 და 18 ოქტომბერს.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>

    <div className="news-main-bg">
    <Link className='news-position' to='newspage=3'>
    <div className="news-card-bg-blue">
    <Card className='news-card-main'>
      <Card.Img className='news-img'  variant="top" src={NewsImg3} />
      <Card.Body>
        <Card.Title className='news-card-title'> საჩხერეში ახალი პროფესიული საგანმანათლებლო ჰაბის პრეზენტაცია</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        მიმდინარე წლის 12 სექტემბერს ბიზნესისა და ტექნოლოგიების აკადემიის რექტორმა ქალბატონმა სოფიო მაჭარაშვილმა ქ. საჩხერეში ახალი პროფესიული საგანმანათლებლო ჰაბის პრეზენტაცია საჩხერის „კინოს სახლში“ ჩაატარა.
პრეზენტაციას მასშტაბური სახე ჰქონდა, რომელსაც საჩხერის მუნიციპალიტეტის მერი - ლევან ივანაშვილი და საჩხერის მუნიციპალიტეტის საკრებულოს თავჯდომარე - გაგა დარბაიძე ესწრებოდნენ, ასევე მოწვეულნი იყვენენ საკრებულოს წევრები და მერიის სამსახურის თანამშრომლები, განათლების რესურს ცენტრის, სკოლებისა და ბაღების ხელმძღვანელები/წარმომადგენლები და სხვა დაინტერესებული პირები.
აღსანიშნავია, რომ პრეზენტაციის სატელევიზიო სივრცეში გასაშუქებლად და მხარდასაჭერად ქ. საჩხერეში ვიზიტით იმყოფებოდა ტელეარხ „პალიტრანიუსის“ შემოქმედებითი გუნდი.
ბიზნესისა და ტექნოლოგიების აკადემია მადლობას უხდის :
გადაცემა „მონეტიზაციის“ წამყვანსა და გადაცემის ავტორს სანდრო ვეფხვაძეს, გადაცემის ბიზნეს რეპორტიორს, პროდიუსერს - ნინა ჯალიაშვილს, გადაცემის რეჟისორსა და თანაწამყვანს - ნიკოლოზ ხომასურიძეს, გადაცემის თანაწამყვანებს - ედიშერ ჯობავას, მარიტა კოჭლამაზიშვილს, ნინო წიკლაურს, სერგო ავსაჯანიშვილს; TV პალიტრანიუსი - TV PalitraNews
საჩხერის მუნიციპალიტეტის საკრებულოსა და მარიას
ბიზნესისა და ტექნოლოგიების აკადემიის საჩხერის განყოფილების ხელმძღვანელობას ბიზნესისა და ტექნოლოგიების აკადემია საჩხერეში
ტელევიზია ივერვიზიას იმერვიზია
ფეისბუქ გვერდს საზოგადოება საჩხერელი საზოგადოება საჩხერელი
        </Card.Text>
          
            
          
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>

    <div className="news-main-bg">
    <Link className='news-position' to='newspage=4'>
    <div className="news-card-bg-blue">
    <Card className='news-card-main'>
      <Card.Img className='news-img'  variant="top" src={NewsImg4} />
      <Card.Body>
        <Card.Title className='news-card-title'>პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!
მოტივაციური გასაუბრების და პროფესიული ტესტირების საბოლოო შედეგები გამოცხადდება ოქტომბრიდან
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>


    <div className="news-main-bg">
    <Link className='news-position' to='newspage=5'>
    <div className="news-card-bg-blue">
    <Card className='news-card-main'>
      <Card.Img className='news-img'  variant="top" src={NewsImg6} />
      <Card.Body>
        <Card.Title className='news-card-title'>სტრატეგიული და სამოქმედო გეგმების ცვლილებები</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        რექტორის ბრძანებით შექმნილი სამუშაო ჯგუფის მიერ დაინტერესებული მხარეების ჩართულობით განხორციელდა სტრატეგიული და სამოქმედო გეგმების ცვლილებები( აღნიშნული გამოიწვია სტრუქტურის ცვლილებამ) , მეტი ჩართულობის და გაზიარების  მიზნით პროექტები განთავსებულია ვებ-გვერდზე, გთხოვთ გაეცნოთ და თქვენი დასაბუთებული  რეკომენდაციები გამოაგზავნოთ არაუგვიანეს 2023 წლის 9 აგვისტოს  18:00 სთ დაწესებულების ელექტრონულ ფოსტაზე: btaedu@yahoo.com, დიდი მადლობა ჩართულობისათვის

დოკუმენტები შეგიძლიათ იხილოთ და ჩამოტვირთოთ ბმულიდან
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>

    <div className="news-main-bg">
    <Link className='news-position' to='newspage=6'>
    <div className="news-card-bg-blue">
    <Card className='news-card-main'>
      <Card.Img className='news-img'   variant="top" src={NewsImg5} />
      <Card.Body>
        <Card.Title className='news-card-title'>ქალაქი გლაზგო (დიდი ბრიტანეთი) EuroWoman 2023 Global Leadership Forum- გლობალური ლიდერობის ფორუმმა მრავალ ბიზნეს ღონისძიებას უმასპინძლა</Card.Title>
        <hr className='news-card-hr' />
        <Card.Text className='news-card-text'>
        გლაზგო, შოტლანდია

ქალები ფორუმზე 27 ქვეყნიდან ჩამოვიდნენ და გამოკვეთეს ყველაზე მნიშვნელოვანი გლობალური პრობლემები და ბიზნეს ჰორიზონტები.

16 ივლისიდან 22 ივლისის ჩათვლით, ქალაქი გლაზგო (დიდი ბრიტანეთი) EuroWoman 2023 Global Leadership Forum- გლობალური ლიდერობის ფორუმმა მრავალ ბიზნეს ღონისძიებას უმასპინძლა.

   ????ფორუმს ესწრენოდნენ ბიზნესისა და ტექნოლოგიების აკადემიის რექტორი სოფიო მაჭარაშვილი და  შრომის უსაფრთხოების მენეჯერი ირაკლი ლაღიძე.

    ????ფორუმის მთავარი თემა უსაფრთხოებაა, როგორც გლობალური მშვიდობის აუცილებელი ფუნდამენტური კომპონენტი.

ფორუმი შოკისმომგვრელი თავისი მასშტაბებით:

- 300-ზე მეტი დელეგატი

-27 ქვეყანა

-50-ზე მეტი ლიდერი უკრაინის დელეგაციაში

აღვნიშნავ, რომ ფორუმმა მიიღო დიდი ბრიტანეთის მთავრობისა და უკრაინის პირველი ლედის ოლენა ზელენსკას ოფისის მხარდაჭერა.

ჩვენ ვცდილობთ შევქმნათ სამყარო, სადაც ქალის ძალა მნიშვნელოვან როლს ითამაშებს მის განვითარებაში.

ფორუმის იდეა და კომუნიკაციის ამ ფორმატის შექმნაში უდიდესი წვლილი ეკუთვნის Ольга Азарова ოლგა აზაროვას და Андрей Азаров ანდრიუ აზაროვს.

გლობალური ლიდერობის ფორუმი EuroWoman 2023 Global Leadership Forum არის პრესტიჟული საერთაშორისო ღონისძიება, რომელიც ფოკუსირებულია ლიდერობის წინსვლასა და ქალთა გაძლიერებაზე სხვადასხვა სფეროში. ის ემსახურება როგორც პლატფორმა ქალი ლიდერების, პროფესიონალებისა და აქტივისტებისთვის სხვადასხვა ქვეყნებიდან და ინდუსტრიიდან, რათა გაერთიანდნენ, განიხილონ საკვანძო საკითხები!

შეხვედრა ,ახალი ნაცნობები და კომუნიკაციები ავსებენ სივრცეს ფორუმის პირველ დღიდან!

   მადლობა ორგანიზაცია ქალები მომავლისთვის Women for Tomorrow ამ საინტერესო შესაძლებლობისთვის.

გაგრძელება იქნება....
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>
    </div>


        </div>

      <div className="show-more">
        <Link  to='/latestnewspg'><Button className='newscomp-btn'>მეტის ჩვენება</Button></Link>
      </div>
   
    </>
  );
}

export default NewsMainComp;