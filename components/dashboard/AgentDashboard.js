import React, { useState } from 'react'
import Image from 'next/image';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
// import { CanvasJSChart } from 'canvasjs-react-charts'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
)

const AgentDashboard = () => {
    let dataPoint;
    let total = 0;

    const doughnutData = {
        labels: ['Canada', 'UK', 'USA', 'Germany', 'Australia'],
        datasets: [{
            label: 'Country Wise Application',
            data: [22, 25, 25, 38, 10],
            backgroundColor: [
                '#0B436A',
                '#1A5F8F',
                '#2C83C0',
                '#FCC21F',
                '#5BACE4'
            ],
            hoverOffset: 4
        }]
    };

    const doughnutOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 20,
                    boxHeight: 20,
                    font: {
                        size: 14
                    },
                }
            }
        }
    }


    let firstData = 22 + '%'
    let secondData = 38 + '%'
    let thirsData = 5 + '%'
    let fourthDarta = 25 + '%'
    let fifthDarta = 10 + '%'
    const labels = [firstData, secondData, thirsData, fourthDarta, fifthDarta];
    const BarData = {
        labels,
        datasets: [{
            label: 'Country Wise Application',
            data: [22, 38, 5, 25, 110],
            backgroundColor: ['#0B436A', '#1A5F8F', '#2C83C0', '#FCC21F', '#5BACE4'],
            barThickness: 20,
        }]
    };

    const BarOptions = {
        plugins: {
            legend: {
                display: false,
            }
        },

        scales: {
            x: {
                ticks: {
                    display: true,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 40,
                ticks: {
                    stepSize: 30,
                    display: false,
                    beginAtZero: true,
                },
                grid: {
                    drawBorder: true,
                    display: true,
                },
            },
        },
    }


    const pieData = {
        labels: ['Canada', 'Germany', 'Australia'],
        datasets: [{
            label: 'Country Wise Pending Student Visa application',
            data: [40, 60, 50],
            backgroundColor: ['#0B436A', '#FCC21F', '#5BACE4'],
            borderWidth: 0,
        }]
    }

    const pieOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 20,
                    boxHeight: 20,
                    font: {
                        size: 14
                    },
                }
            }
        }
    }


    // const pyramidOptions = {
    //     legend: {
    //             horizontalAlign: "right",
    //             verticalAlign: "center",
    //             reversed: true
    //         },
    //     toolTip:{
    //       enabled: true,
    //     },
    //     data: [{
    //       type: "pyramid",
    //       showInLegend: false,
    //             legendText: false,
    //       indexLabelFontSize: 12,
    //             indexLabel: "({percentage}%)",
    //       toolTipContent: false,
          
    //       dataPoints: [
    //         { y: 2000, color: "#0B436A" },
    //         { y: 4000, color: "#1A5F8F" },
    //         { y: 6000, color: "#2C83C0" },
    //         {  y: 8000, color: "#5BACE4" },
    //         {  y: 10000, color: "#FCC21F" }
    //       ]
    //     }]
    //   }
    
    //     dataPoint = pyramidOptions.data[0].dataPoints;
      
    //   for (var i = 0; i < dataPoint.length; i++) {
    //     total += dataPoint[i].y
    //     if (i === 0) {
    //             pyramidOptions.data[0].dataPoints[i].percentage = 100;
    //         } else {
    //             pyramidOptions.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
    //       console.log(pyramidOptions.data[0].dataPoints[i].percentage)
    //         }
    //     }



    return (
        <>
            <div className="content-panel dashboard-agent">

                <div className="row">
                    <div className="col-lg-12 col-sm-12 mb-4">
                        <div className="chart-box">
                            <div className="chart-heading chart-heading-dorodown">
                                <div className='d-flex align-items-center'>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/potential-revenue-icon.svg`}
                                        alt="Panache"
                                        width={40}
                                        height={40}
                                        priority={true}
                                    />
                                    <h3>Potential Revenue</h3>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-usd">
                                        4K USD
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mb-4">
                        <div className="chart-box">
                            <div className="chart-heading">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/country-wise-application.svg`}
                                    alt="Panache"
                                    width={24}
                                    height={31}
                                    priority={true}
                                />
                                <h3>Country Wise Application</h3>
                            </div>
                            <div className='m-0'>
                                <Doughnut
                                    data={doughnutData}
                                    options={doughnutOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mb-4">
                        <div className="chart-box">
                            <div className="chart-heading">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/enrolltent-student.svg`}
                                    alt="Panache"
                                    width={35}
                                    height={25}
                                    priority={true}
                                />
                                <h3>Country Wise Enrolltent Student</h3>
                            </div>
                            <div className='row mt-5'>
                                <div className="col-md-9">
                                    <Bar
                                        data={BarData}
                                        options={BarOptions}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className="bar-chart-label d-flex">
                                        <span style={{ backgroundColor: '#0B436A' }} className="bar-color"></span>
                                        <h4>Canada</h4>
                                    </div>
                                    <div className="bar-chart-label d-flex">
                                        <span style={{ backgroundColor: '#1A5F8F' }} className="bar-color"></span>
                                        <h4>UK</h4>
                                    </div>
                                    <div className="bar-chart-label d-flex">
                                        <span style={{ backgroundColor: '#2C83C0' }} className="bar-color"></span>
                                        <h4>USA</h4>
                                    </div>
                                    <div className="bar-chart-label d-flex">
                                        <span style={{ backgroundColor: '#FCC21F' }} className="bar-color"></span>
                                        <h4>Germany</h4>
                                    </div>
                                    <div className="bar-chart-label d-flex">
                                        <span style={{ backgroundColor: '#5BACE4' }} className="bar-color"></span>
                                        <h4>Australia</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="chart-box pyramid-box">
                            <div className="chart-heading">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/enrolltent-student.svg`}
                                    alt="Panache"
                                    width={35}
                                    height={25}
                                    priority={true}
                                />
                                <h3>Country Wise Pending Student</h3>
                            </div>

                            <div className="m-0">
                                <div className="pyramid-chart-container">
                                    <div className="pyramid-chart-holder">
                                    {/* <CanvasJSChart
                          options={pyramidOptions}
                        /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="chart-box">
                            <div className="chart-heading">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/pending-imgae.svg`}
                                    alt="Panache"
                                    width={28}
                                    height={28}
                                    priority={true}
                                />
                                <h3>Country Wise Pending Student Visa application</h3>
                            </div>
                            <div className="m-0">
                                <Pie
                                    data={pieData}
                                    options={pieOptions}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AgentDashboard;