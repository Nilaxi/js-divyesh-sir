myDate = new Date();
const employee = [
  {
    id: 'rec43w3ipXvP28vog',
    name: 'high-back bench',
    company: 'ikea',
    joining: new Date(Date.UTC(2021, 5, 29,)),

  },
  {
    id: 'rec4f2RIftFCb7aHh',
    name: 'albany table',
    company: 'marcos',
    joining: new Date(Date.UTC(2021, 5, 22,)),
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    name: 'albany table',
    company: 'marcos',
    joining: new Date(Date.UTC(2022, 5, 23,)),
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    name: 'albany table',
    company: 'marcos',
    joining: new Date(Date.UTC(2020, 5, 9,)),

  },
]
const display = () => {
  const displayHtml = employee.map((v) => {
    return `<div class="col-md-4">
        <div class="card">
              <div class="card-header bg-dark d-sm-flex justify-content-sm-between align-items-sm-center">
              <div class=" card-title">
                <a href="#" style="color:white" class="display-inline-   block" onmouseover="this.style.color='#00e6ac'" onmouseout="this.style.color='#fff'">
                <strong></strong>
                </a>
              </div>
            </div>
            <div class="card-body bg-light">
             <p>${v.id}</p>
             <p>${v.name}</p>
             <p>${v.company}</p>
             <p>${v.joining}</p>
            </div>
          </div>
      </div>`
  })
  document.getElementById("input").innerHTML = displayHtml.join("");
}
display();
ascending = () => {
  let sortdata = employee.sort((a, b) => {
    if (a.joining > b.joining) {
      return 1
    }
  });
  display(sortdata);
}



