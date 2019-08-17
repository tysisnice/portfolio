
import React, { EventHandler } from 'react';
import * as d3 from 'd3';
import './index.css';


interface IProps {
};

interface IState {
  data: any[];
}

let globalX = 0;
let globalY = 0;
const globalMouseMove = (e: MouseEvent) => {
  globalX = e.clientX;
  globalY = e.clientY;
}


class BarChart extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    const dataUrl = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
    this.state = {
      data: [['b-d-d',10],['p-s-s',203],['ds-s-s',20],['q-r-r',310]]
    };
    fetch(dataUrl).then(res => {
      res.json().then(({ data }) => this.setState({ data }))
    })
  }

  render() {
    return (
      <div id="BarChart">
        <h1 id="title">United States GPD year by year</h1>
        <div id="tooltip" title="regular tooltip"/>
        <div id="bar-chart"/>
      </div>
    );
  }

  componentWillMount() {
    window.addEventListener('mousemove', globalMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', globalMouseMove);
  }

  componentDidUpdate() {
    const docWidth = document.documentElement.clientWidth;
    const dataset = this.state.data;
    const padding = 50;
    const h = 350;
    const w =  docWidth > 800 ? 700 : docWidth - padding * 2;
    const l = dataset.length;
    const yearSet = dataset.map(e => {
      return Number.parseInt(e[0].substring(0,4));
    })

    console.log(dataset);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      .range([h,0]);

    const xScale = d3.scaleLinear()
      .domain([d3.min(yearSet) as number, d3.max(yearSet) as number])
      .range([0, w])

    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

    const svg = d3.select('#bar-chart')
      .append('svg')
      .attr('height', h + (padding*2))
      .attr('width', w + (padding*2));

    const tooltip = document.getElementById('tooltip') as HTMLElement;

    function mouseover([date, gpd]: any) {
      const s = date.split('-');
      const q = s[1] === '01' ? 'Q1' : s[1] === '04' ? 'Q2' : s[1] === '07' ? 'Q3' : 'Q4';
      const quarter = s[0] + ' ' + q + ': \n';
      tooltip.setAttribute('data-date', date);
      tooltip.setAttribute('visible', 'ok');
      tooltip.innerText = quarter + `$${gpd} billion`;
      tooltip.style.top = (globalY - 80) + 'px';
      tooltip.style.left = (globalX - 80) + 'px';
    } 

    function mouseleave() {
      tooltip.removeAttribute('visible');
      tooltip.innerText = '';
    }

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('data-date', d => d[0])
      .attr('data-gdp', d => d[1])
      .attr('width', (d, i) => ((w / l)) )
      .attr('height', d => h - yScale(d[1]) )
      .attr('x', (d, i) => ((w / l) * i) + padding)
      .attr('y', d => yScale(d[1]) + padding)
      .on('mouseover', (e) => mouseover(e))
      .on('mouseleave', () => mouseleave());

    svg.append('g')
      .attr('transform', `translate(${padding},${padding})`)
      .attr('id', 'y-axis')
      .call(yAxis);
    
    svg.append('g')
      .attr('transform', `translate(${padding},${h + padding})`)
      .attr('id', 'x-axis')
      .call(xAxis);
  }
};


export default BarChart;
