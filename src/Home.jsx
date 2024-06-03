import { useState } from 'react'
import rhData from '../src/assets/rh.json'
import co2Data from '../src/assets/co2.json'
import o2VsVOCData from '../src/assets/o2VsVOC.json'
import vocData from '../src/assets/voc.json'
import tempData from '../src/assets/temp.json'
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    Rectangle,
    Label,
    LineChart,
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='main-chart'>
            <div className='main-chart-wrapper'>
                <h4 className='main-chart-title chart-title'>Average Relative Humidity</h4>
                    <ResponsiveContainer width="100%" height="85%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={rhData}
                            margin={{
                                top: 10,
                                right: 60,
                                left: 12,
                                bottom: 0,
                            }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis>
                            <Label value='Percentage' angle={-90} offset={20} position="insideLeft" />
                        </YAxis>
                        <Tooltip />
                        <Area type="monotone" dataKey="relative humidity" stroke="#26cd7f" fill="#26cd7f" />
                        </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className='charts'>
            <div className='charts-wrapper'>
                <h4 className='chart-title'>CO<sub>2</sub> Levels on March 1, 2024</h4>
                <ResponsiveContainer width="100%" height="85%">
                    <LineChart
                        width={500}
                        height={300}
                        data={co2Data}
                        margin={{
                            top: 5,
                            right: 55,
                            left: 25,
                            bottom: 15,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" x="" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: "Carbon Dioxide", angle: -90, position: "insideLeft" }} domain={[450, 550]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="input" stroke="#2c9db2" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="output" stroke="#26cd7f" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='charts-wrapper'>
                <h4 className='chart-title'>Average O<sub>2</sub> and Volatile Organic Compound Levels throughout March 2024</h4>
                <div style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                        width={500}
                        height={200}
                        data={o2VsVOCData}
                        syncId="chart2"
                        margin={{
                            top: 10,
                            right: 55,
                            left: 22,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis>
                            <Label value="Amount (ppm)" angle={-90} offset={23} position="insideBottomLeft" />
                        </YAxis>
                        <Tooltip />
                        <Area type="monotone" dataKey="oxygen" stroke="#2c9db2" fill="#2c9db2" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                        width={500}
                        height={200}
                        data={o2VsVOCData}
                        syncId="chart2"
                        margin={{
                            top: 20,
                            right: 55,
                            left: 22,
                            bottom: 10,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis>
                            <Label value="Amount (ppb)" angle={-90} offset={7} position="insideBottomLeft" />
                        </YAxis>
                        <Tooltip />
                        <Area type="monotone" dataKey="voc" stroke="#26cd7f" fill="#26cd7f" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='charts-wrapper'>
                <h4 className='chart-title'>Average Volatile Organic Compound Levels Throughout April, 2024</h4>
                <ResponsiveContainer width="100%" height="85%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={vocData}
                        margin={{
                            top: 10,
                            right: 55,
                            left: 15,
                            bottom: 15,
                        }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis>
                        <Label value='Amount (ppb)' angle={-90} offset={10} position='insideLeft' />
                    </YAxis>
                    <Tooltip />
                    <Area type="monotone" dataKey="input" stackId="1" stroke="#2c9db2" fill="#2c9db2" />
                    <Area type="monotone" dataKey="output" stackId="1" stroke="#26cd7f" fill="#26cd7f" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='charts-wrapper'>
            <h4 className='chart-title'>Temperatures Throughout March, 2024</h4>
                <ResponsiveContainer width="100%" height="85%">
                    <BarChart
                    width={500}
                    height={300}
                    data={tempData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis>
                        <Label value='Degrees (F)' angle={-90} offset={10} position='insideLeft' />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="input" fill="#2c9db2" activeBar={<Rectangle fill="#1f6f80" stroke="#1f6f80" />} />
                    <Bar dataKey="output" fill="#26cd7f" activeBar={<Rectangle fill="#1d9c5e" stroke="#1d9c5e" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </main>
  )
}

export default Home