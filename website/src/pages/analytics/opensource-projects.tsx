
import React from 'react';
import Layout from '@theme/Layout';
import BarChartAnalyticsComponent from "../../components/AnalyticsComponent/barChart";

export default function App(): JSX.Element {

    const dataset = {
        "Go": 8.68,
        "Shell": 0.38,
        "JavaScript": 9.16,
        "CSS": 0.22,
        "Vue": 0.37,
        "Python": 19.99,
        "TypeScript": 13.93,
        "HTML": 2.3,
        "SCSS": 0.76,
        "Dockerfile": 0.06,
        "Java": 3.58,
        "Perl": 1.22,
        "C": 12.03,
        "C++": 5.07,
        "CMake": 0.06,
        "Ruby": 1.01,
        "Tcl": 2.88,
        "Assembly": 0.01,
        "Makefile": 0.19,
        "Smarty": 0.25,
        "PHP": 0.43,
        "Blade": 0.03,
        "Rust": 2.25,
        "Jsonnet": 0.02,
        "Objective-C++": 0.05,
        "Inno Setup": 0.01,
        "Objective-C": 0.01,
        "AppleScript": 0.0,
        "Batchfile": 0.01,
        "Procfile": 0.0,
        "Starlark": 0.11,
        "Swift": 0.37,
        "Fluent": 0.01,
        "Lua": 10.96,
        "HCL": 0.05,
        "Less": 0.0,
        "Scheme": 0.0,
        "Jinja": 0.0,
        "Groovy": 0.13,
        "XSLT": 0.32,
        "Jupyter Notebook": 2.88,
        "Open Policy Agent": 0.03,
        "Scala": 0.17,
        "Mustache": 0.0
    };

    // convert dataset to fakeDataset structure
    const adjustedDataset: any[] = [];
    Object.keys(dataset).forEach((key) => {
        adjustedDataset.push({
        language: key,
        percentage: dataset[key]
      });
    });
    adjustedDataset.sort((a, b) => b.percentage - a.percentage);


    return (
      <Layout
        title={`Open-Source Porject Analytics`}
        wrapperClassName="layout"
        description="Analytics of open-source projects created by Italian developers and companies">
        <main className="main">
        <div>
            <h1>Analytics</h1>
        </div>
        <BarChartAnalyticsComponent data={adjustedDataset} />
        </main>
        </Layout>
    );
}


