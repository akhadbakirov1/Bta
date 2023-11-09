import './greetingcomp.css';
import LectorsImg from '/public/Images/sliderimg/nature.jpg';
import Progress from '../../Content/Progress/Progress';

const GreetingComp = () =>  {
    return(
        <>

        <div className="rectors-greeting-main">
         <div class="one">
        <hr />
            <h1 className='one-h1'>რექტორის მისალმება</h1>
        <hr />
        </div>
        
        <div className="rector-main">
            <div className="rector-text-section">
                <div className="rectors-greeting">
                  
                <div className="lectors-img-container">
                    <img className='lectors-img' src={LectorsImg} alt="" />
                </div>
                    <br />
                    <p className='greeting-text-1'>ძვირფასო მეგობრებო, მოგესალმებათ ბიზნესისა და ტექნოლოგიების აკადემია!</p>
                    
                    <p className='greeting-text-1'>თქვენ მიერ არჩეული ავტორიზებული პროფესიული საგანმანათლებლო დაწესებულება უზრუნველყოფს განათლებისა და სწავლების მაღალ ხარისხს, ასევე თითოეული სტუდენტისთვის ძალიან მნიშვნელოვანს – აკადემიურ თავისუფლებას!</p>

                    <p className='greeting-text-1'>პროფესიული საგანმანათლებლო დაწესებულება, რომელიც თქვენ აირჩიეთ, არის საქართველოს ავტორიზებული პროფესიული სასწავლებელი, რომელმაც დააკმაყოფილა ყველა საავტორიზაციო სტანდარტი.</p>

                    <p className='greeting-text-1'>ჩვენს აკადემიაში გეძლევათ შანსი მიიღოთ ღრმა პროფესიული ცოდნა და თანამედროვე სტანდარტების შესაფერისი განათლება, რათა დაიმკვიდროთ ღირსეული ადგილი საზოგადოებაში.</p>

                    <p className='greeting-text-1'>პროფესიული განათლების სრულყოფილად დაუფლებისთვის უმნიშვნელოვანესია პრაქტიკული ნაწილიც, აკადემია დიდ ყურადღებას აქცევს პარტნიორი კომპანიების რეპუტაციასა და მაშტაბურობას, სწორედ ამიტომ გეძლევათ შესაძლებლობა პრაქტიკული ნაწილი შეისწავლოთ საქართველოში წამყვან კომპანიებში, შეხება გქონდეთ უშუალოდ დამსაქმებლებთან.</p>

                    <p className='greeting-text-1'>აქ სტუდენტებს გელით საინტერესო და მრავალფეროვანი სტუდენტური ცხოვრება, ხოლო მასწავლებლებს – კომფორტული სამუშაო გარემო.</p>

                    <p className='greeting-text-1'>კეთილი იყოს თქვენი მობრძანება ბიზნესისა და ტექნოლოგიების აკადემიაში!</p>
                   
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default GreetingComp;