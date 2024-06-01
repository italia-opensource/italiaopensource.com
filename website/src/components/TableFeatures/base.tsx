import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './styles.module.css';
import { Link, Typography } from '@mui/material';


export abstract class TableData {
    customers: any;
    setCustomers: any;
    filters: any;
    setFilters: any;
    globalFilterValue: any;
    setglobalFilterValue: any;
    loading: any;
    setLoading: any;
    abstract initFilterValues: { [key: string]: {} };

    constructor(endpoint: string, mockDataJson?: any) {
        [this.customers, this.setCustomers] = useState(null);
        [this.filters, this.setFilters] = useState(null);
        [this.globalFilterValue, this.setglobalFilterValue] = useState('');
        [this.loading, this.setLoading] = useState(true);

        this.onGlobalFilterChange = this.onGlobalFilterChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);

        useEffect(() => {
            this.getMockData(mockDataJson);
            // this.isLocalHost(window.location.hostname) ?
            //     this.getMockData(mockDataJson) :
            //     this.getLists(`https://api.italiaopensource.com/${endpoint}`);
         }, []); // eslint-disable-line react-hooks/exhaustive-deps
    }

    getMockData(mockDataJson) {
        // console.log('[DEV] Mock data:', this.tranformData(mockDataJson));
        this.setCustomers(this.tranformData(mockDataJson));
        this.setLoading(false);
        this.initFilters();
    }

    getLists(url: string) {
        fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
             this.setCustomers(this.tranformData(data));
             this.setLoading(false);
             this.initFilters();
        })
        .catch((err) => {
           console.log(err.message);
           this.setCustomers(this.tranformData({}));
           this.setLoading(false);
           this.initFilters();
        });
    }

    isLocalHost(url) {
        return url.indexOf('localhost') !== -1 || url.indexOf('127.0.0.1') !== -1;
    }

    tranformData(data: any) {
        return [...data.data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    initFilters() {
        this.setFilters(this.initFilterValues);
        this.setglobalFilterValue('');
    }

    clearFilter() {
        this.initFilters();
    }

    onGlobalFilterChange(e) {
        const value = e.target.value;
        let _filters = { ...this.filters };
        _filters['global'].value = value;

        this.setFilters(_filters);
        this.setglobalFilterValue(value);
    }

    renderHeader() {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={this.clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={this.globalFilterValue} onChange={this.onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    renderFooterCopy(name, link) {
        return (
            <Typography gutterBottom marginTop={2}>
                If you want to add a new item in {name} list, please check the <Link href={link}>contributors page</Link><br/>
            </Typography>
        );
    }

    normalizeLink(link: string) {
        return link.normalize('NFD').toLowerCase().trim().replace(/ /g, "-").replace(/[\u0300-\u036f]/g, '');
    }

    abstract create(): JSX.Element;
}