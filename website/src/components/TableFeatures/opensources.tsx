import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TableData } from './base';

import mockDataJson from "../../../database/opensource.json";
import { isMobile } from 'react-device-detect';

class OpensourceTableData extends TableData {
    initFilterValues: { [key: string]: {}; } = {
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'type': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'license': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'tags': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] }
    };

    constructor() {
        super('opensources', mockDataJson);
    }

    create(): JSX.Element {
        const nameBodyTemplate = (rowData) => {
        const link = "/opensources/" + this.normalizeLink(rowData.name);
            return <React.Fragment>
                <a href={link}>{rowData.name}</a>
            </React.Fragment>
        }

        const tagsBodyTemplate = (rowData) => {
            if (rowData.tags != undefined) {
                return rowData.tags.join(", ")
            }
            console.log("Error display: " + rowData)
        }
        const header = this.renderHeader();

        return (
            <DataTable
                value={this.customers}
                paginator
                showGridlines
                className="p-datatable-customers"
                rows={20}
                dataKey="id"
                filters={this.filters}
                filterDisplay="menu"
                loading={this.loading}
                responsiveLayout="scroll"
                globalFilterFields={['name', 'repository_platform']}
                header={header} emptyMessage="No projects found."
                footer={this.renderFooterCopy('opensource', '/contributors/developers')}>
                <Column alignHeader='center' field="name" header="Name"  body={nameBodyTemplate} filter filterPlaceholder="Search by name"/>
                <Column alignHeader='center' field="type" header="Type" filter filterPlaceholder="Search by type"  />
                <Column alignHeader='center' hidden={isMobile ? true : false} field="license" header="License" filter filterPlaceholder="Search by license"  />
                <Column alignHeader='center' hidden={isMobile ? true : false} field="tags" header="Tags" filter filterPlaceholder="Search by tags"  body={tagsBodyTemplate} />
                <Column alignHeader='center' hidden={isMobile ? true : false} field="description" header="Description" />
            </DataTable>

        );
    }
}

export default function Table(): JSX.Element {
    return new OpensourceTableData().create();
}