// Plotly Homework 15
// Ben Bastedo 

//1. Use the D3 library to read in `samples.json`
function chart (samples){
    d3.json("samples.json").then((data)=>{
        var samples = data.samples;
        var dataArray = samples.filter(sampleObj => sampleObj.id == sample);
        var results = dataArray[0];
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = results.sample_values;
        console.log(otu_ids);
        
        //Create dataset to plot
        data = [{
            type: "bar",
            orientation:'h',
            x: otu_ids.slice(0,10),
            y: sample_values.slice(0,10),
            text: otu_labels.slic(0,10)
        }];

        var barLayout ={
            title: 'Test Subject Data',
            showlegend: true,
            height:400,
            width:500
        };
        
        Plotly.newPlot("bar", data, barLayout);

    })
}