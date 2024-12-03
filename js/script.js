const form  = document.getElementById('form')
const resultContainer = document.getElementById('result-container')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let monthlyPayment;
    let totalPayment;
    
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const totalInterest = data.term * data.interest
    totalPayment = Number(totalInterest) + Number(data.amount)
    monthlyPayment = Number(totalPayment) / 12 
    resultContainer.innerHTML = `
    <article id= container class="desktop-design">
      <h1 class="your-results">Your results</h1>
      <p class="text-form">Yor results are shown below based on the information you provided.To adjust the results, edit the form and click *calculate repayments* again.</p>
   
      <div class="monthly-repayments">
      <p >Your monthly repayments</p>
      <h1 class="amount" id="amount">€${monthlyPayment.toLocaleString()}</h1>
       <hr>
       <p>Total you'll repay over the time</p>
       <h1 class="last-amount" id="lastAmount">€${totalPayment.toLocaleString()}</h1>
    </div>
    </article>`
})