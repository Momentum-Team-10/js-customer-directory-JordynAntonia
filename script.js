const root = document.getElementById('root');
const container = document.createElement(`div`);
root.appendChild(container);
container.classList.add(`uk-container-large`, `uk-flex`, `uk-flex-between`);

for (let customer of customers) {
    const customerCard = document.createElement(`div`);
    customerCard.id = `${customer.id}`;
    container.appendChild(customerCard);
    customerCard.classList.add(
        "uk-card",
        "uk-card-body",
        "uk-card-default",
        "uk-width-medium"

    );

    customerCard.innerHTML = `
<img src=${customer.image}/>
<p> class="uk-card-name">${customer.name}</p>
<p>${customer.email}</p>
<p>${customer.address}</p>
<p>DOB:${customer.dateofBirth}</p>
<p>Customer since${customer.registration}</p>

}

for(var i = 0; i < 10; i++) {
    document.body.innerHMTL += `
}

console.log = (customers[0].name.first.last)
// <!-- // "Sophia Burns" -->

console.log = (customers[4].email)
// <!-- // 'sophia.burns@example.com' -->

console.log = (customers[1].location.street)
// <!-- // 4339 Green Rd -->

console.log = (customers[1].location.city.state)
// <!-- // Great Falls Alabama  -->

console.log = (customers[4].dob.date)
// <!-- // '1990-07-28T13:05:47.042Z' -->

console.log = (customers[5].registered.date)
// <!-- // '2012-03-09T06:54:45.213Z' -->