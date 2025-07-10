function displayMe()
{
    if(document.getElementById('hide').style.display=='none')
    {
        document.getElementById('hide').style.display='block';
    }
    else
    {
        document.getElementById('hide').style.display='none';
    }
}
let objects= [];
function objAppend()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        data.forEach((std,idx)=>
        {
            objects.push(std);
        })
    }
    )
    .catch(error => console.error(error));   
}
objAppend();
function display_main ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.basic .row ');
        content.innerHTML="";
        const rowN = document.createElement('div');
        rowN.className = "col-lg-6 col-md-4 col-md-12  col-12 row  mt-5";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="Main")
            {
                
                if(news.ID==1)
                {
                    const row = document.createElement('div');
                    row.className = "col-lg-6 col-md-12 col-12 row mb-2  mt-5 first";
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:300px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h3>${news.Title}</h3>
                    </div>
                    <div class="col-12">
                    <span style="font-size:12px;" class="fw-medium">${news.OverView}</span>
                    </div>
                    <div class="col-12 mt-3">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    content.appendChild(row);
                    content.appendChild(rowN);
                    console.log("hi");
                }
                else if (news.ID<6) {
                    console.log("hi");
                    const row = document.createElement('div');
                    row.className = "col-lg-6  col-6 mb-3";
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h6>${news.Title}</h6>
                    </div>
                    <div class="col-12">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    rowN.appendChild(row);
                } else if (news.ID>5) {
                    const row = document.createElement('div');
                    row.className = "col-md-3 col-6";
                    row.innerHTML= `
                    <div class="col-12 mt-2">
                    <h6>${news.Title}</h6>
                    </div>
                    <div class="col-12 mt-3">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    content.appendChild(row);
                    
                }
                if(news.ID==5)
                {
                    const row = document.createElement('div');  
                    row.className = "row";
                    row.innerHTML= `
                    
                    <div class=" col-12 split" ></div>
                    `;
                    content.appendChild(row);
                }
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_main();
function display_video ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.video .row ');
        content.innerHTML="";
        const rowN = document.createElement('div');
        rowN.className = "col-lg-6 col-md-4 col-md-12 vvv col-12 row  mt-2";
        
        objects.forEach((news,idx)=>
        {
            if(news.Category=="Video")
            {
                
                if(news.ID==1)
                {
                    const row = document.createElement('div');
                    row.className = "col-lg-6 col-md-12 col-12 row mb-2  mt-2 ";
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:300px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h3>${news.Title}</h3>
                    </div>
                    <div class="col-12">
                    <span style="font-size:12px;" class="fw-medium">${news.OverView}</span>
                    </div>
                    <div class="col-12 mt-3">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    content.appendChild(row);
                    content.appendChild(rowN);
                    console.log("hi");
                }
                else if (news.ID<6) {
                    console.log("hi");
                    const row = document.createElement('div');
                    row.className = "col-lg-6  col-6 mb-3";
                    
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h6>${news.Title}</h6>
                    </div>
                    <div class="col-12">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    rowN.appendChild(row);
                } 
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_video();
function display_olympiad ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.olympiad .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="olympiad")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-3 col-6 mb-3";
                row.innerHTML= `
                <div class="col-12">
                <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                </div>
                <div class="col-12 mt-2">
                <h6>${news.Title}</h6>
                </div>
                <div class="col-12">
                <span class="timing">${news.Timing}</span>
                </div>
                `;
                content.appendChild(row);
                
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_olympiad();
function display_election ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.election .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="election")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-3 col-6 mb-3";
                row.innerHTML= `
                <div class="col-12">
                <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                </div>
                <div class="col-12 mt-2">
                <h6>${news.Title}</h6>
                </div>
                <div class="col-12">
                <span class="timing">${news.Timing}</span>
                </div>
                `;
                content.appendChild(row);
                
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_election();
function display_climate ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.climate .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="climate")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-3 col-6 mb-3";
                row.innerHTML= `
                <div class="col-12">
                <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                </div>
                <div class="col-12 mt-2">
                <h6>${news.Title}</h6>
                </div>
                <div class="col-12">
                <span class="timing">${news.Timing}</span>
                </div>
                `;
                content.appendChild(row);
                
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_climate();
function display_economy ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.economy .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="economy")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-3 col-6 mb-3";
                row.innerHTML= `
                <div class="col-12">
                <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                </div>
                <div class="col-12 mt-2">
                <h6>${news.Title}</h6>
                </div>
                <div class="col-12">
                <span class="timing">${news.Timing}</span>
                </div>
                `;
                content.appendChild(row);
                
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_economy();
function display_health ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.health .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="health")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-3 col-6 mb-3";
                row.innerHTML= `
                <div class="col-12">
                <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                </div>
                <div class="col-12 mt-2">
                <h6>${news.Title}</h6>
                </div>
                <div class="col-12">
                <span class="timing">${news.Timing}</span>
                </div>
                `;
                content.appendChild(row);
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_health();
function display_Programs ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.Programs .row ');
        content.innerHTML="";
        const rowN = document.createElement('div');
        rowN.className = "col-lg-6 col-md-4 col-md-12 vvv col-12 row  mt-2";
        
        objects.forEach((news,idx)=>
        {
            if(news.Category=="Programs")
            {
                
                if(news.ID==1)
                {
                    const row = document.createElement('div');
                    row.className = "col-lg-6 col-md-12 col-12 row mb-2  mt-2 ";
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:300px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h3>${news.Title}</h3>
                    </div>
                    <div class="col-12">
                    <span style="font-size:12px;" class="fw-medium">${news.OverView}</span>
                    </div>
                    <div class="col-12 mt-3 mb-2">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    content.appendChild(row);
                    content.appendChild(rowN);
                    console.log("hi");
                }
                else if (news.ID<6) {
                    console.log("hi");
                    const row = document.createElement('div');
                    row.className = "col-lg-6  col-6 mb-3";
                    
                    row.innerHTML= `
                    <div class="col-12">
                    <img class= "col-12" style="height:150px" src="../images/${news.Photo}" 
                    </div>
                    <div class="col-12 mt-2">
                    <h6>${news.Title}</h6>
                    </div>
                    <div class="col-12">
                    <span class="timing">${news.Timing}</span>
                    </div>
                    `;
                    rowN.appendChild(row);
                } 
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_Programs();
function display_mostReading ()
{
    fetch("news.json")
    .then(Response => Response.json())
    .then(data => 
    {   
        const content = document.querySelector('.mostReading .row ');
        content.innerHTML="";
        objects.forEach((news,idx)=>
        {
            if(news.Category=="mostReading")
            {
                console.log("hi");
                const row = document.createElement('div');
                row.className = "col-md-6 col-12 mb-3";
                row.innerHTML= `
                <div class="row num">
                    <div class="col-1">
                        <h1 class="number">${news.ID}</h1>
                    </div>
                    <div class="col-11"  >
                        <h5 class="" >${news.Title}</h5>
                    </div>
                </div>
                `;
                content.appendChild(row);
            }
        })
    }
    )
    .catch(error => console.error(error));   
}
display_mostReading();