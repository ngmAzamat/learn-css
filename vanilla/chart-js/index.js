let canvas = window.document.querySelector("canvas");
let context = canvas.getContext("2d");

fetch(
  "https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo"
)
  .then((respose) => respose.json())
  .then((json) => {
    let data = json["data"];
    let xData = [];
    let yData = [];
    for (let i = 0; i < data.length; i++) {
      xData.push(data[i].date);
      yData.push(data[i].value);
    }
    new Chart(context, {
      type: "line",
      data: {
        labels: xData,
        datasets: [
          {
            label: "mh,k.kgk",
            data: yData,
          },
        ],
      },
    });
  });
