const indianPlayers = [
    {
      name: "Virat Kohli",
      age: 35,
      iplTeam: "Royal Challengers Bangalore",
      isMarried: true
    },
    {
      name: "Rohit Sharma",
      age: 36,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "MS Dhoni",
      age: 42,
      iplTeam: "Chennai Super Kings",
      isMarried: true
    },
    {
      name: "Hardik Pandya",
      age: 29,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "KL Rahul",
      age: 31,
      iplTeam: "Lucknow Super Giants",
      isMarried: false
    },
    {
      name: "Shubman Gill",
      age: 24,
      iplTeam: "Gujarat Titans",
      isMarried: false
    },
    {
      name: "Jasprit Bumrah",
      age: 29,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "Rishabh Pant",
      age: 26,
      iplTeam: "Delhi Capitals",
      isMarried: false
    },
    {
      name: "Suryakumar Yadav",
      age: 33,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "Shikhar Dhawan",
      age: 38,
      iplTeam: "Punjab Kings",
      isMarried: true
    },
    {
        name: "David Warner",
        age: 37,
        iplTeam: "Delhi Capitals",
        isMarried: true
      },
      
      {
        name: "Steve Smith",
        age: 34,
        iplTeam: "Rajasthan Royals",
        isMarried: true
      },
      
      {
        name: "Glenn Maxwell",
        age: 35,
        iplTeam: "Royal Challengers Bangalore",
        isMarried: true
      },
      
      {
        name: "Pat Cummins",
        age: 30,
        iplTeam: "Kolkata Knight Riders",
        isMarried: true
      },
      
      {
        name: "Mitchell Starc",
        age: 33,
        iplTeam: "Royal Challengers Bangalore",
        isMarried: true
      }
      
  ];
  

let table=document.createElement('table');
document.body.appendChild(table);
table.style.border="10px solid pink";

let headth=document.createElement('tr');
table.appendChild(headth);


let Nameth=document.createElement('th');
Nameth.innerText='Name';
Nameth.style.border="2px solid purple"

let Ageth=document.createElement('th');
Ageth.innerText='Age';
Ageth.style.border="2px solid purple"


let ipl_team=document.createElement('th');
ipl_team.innerText='Ipl Team';
ipl_team.style.border="2px solid purple"

let isMarried=document.createElement('th');
isMarried.innerText='Married';
isMarried.style.border="2px solid purple"


headth.append(Nameth);
headth.append(Ageth);
headth.append(ipl_team);
headth.append(isMarried);

indianPlayers.forEach((ele,i)=>{
    let tr=document.createElement('tr');
    table.style.borderCollapse="collapse"
    let details=Object.values(ele);
    details.forEach((data)=>{
        let td=document.createElement('td');
        td.style.border="1px solid purple";
        td.innerText=data;
        tr.appendChild(td);
    })
    table.appendChild(tr);
})