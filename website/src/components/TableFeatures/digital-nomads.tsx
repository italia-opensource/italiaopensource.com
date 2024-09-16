import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TableData } from './base';

import mockDataJson from "../../../database/digital-nomads.json";

import { isMobile } from 'react-device-detect';

class DigitalNomadsTableData extends TableData {
    initFilterValues: { [key: string]: {}; } = {
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'state_name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'how_to_move': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        'required_documents': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        'tags': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    };

    constructor() {
        super('digital-nomads', mockDataJson);
    }

    create(): JSX.Element {
        const nameBodyTemplate = (rowData) => {
        const link = "/digital-nomads/" + this.normalizeLink(rowData.name);
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

        const requiredDocumentsBodyTemplate = (rowData) => {
            if (rowData.required_documents != undefined) {
                return rowData.required_documents.join(", ")
            }
            console.log("Error display: " + rowData)
        }

        const howToMoveBodyTemplate = (rowData) => {
            if (rowData.how_to_move != undefined) {
                return rowData.how_to_move.join(", ")
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
                        globalFilterFields={['name', 'state_name']}
                        header={header} emptyMessage="No digital nomdas place found."
                        footer={this.renderFooterCopy("digital-nomads", '/contributors/digital-nomads')}>
                        <Column alignHeader='center' field="name" header="Name"  body={nameBodyTemplate} filter filterPlaceholder="Search by name" />
                        <Column alignHeader='center' field="state_name" header="State" filter filterPlaceholder="Search by state"  />
                        <Column alignHeader='center' hidden={isMobile ? true : false} field="how_to_move" header="How to Move" body={howToMoveBodyTemplate} filter filterPlaceholder="Search by means of transport" />
                        <Column alignHeader='center' hidden={isMobile ? true : false} field="required_documents" header="Required Documents" body={requiredDocumentsBodyTemplate} filter filterPlaceholder="Search by events type" />
                        <Column alignHeader='center' hidden={isMobile ? true : false} field="tags" header="Tags" filter filterPlaceholder="Search by tags" body={tagsBodyTemplate} />
                        <Column alignHeader='center' hidden={isMobile ? true : false} field="description" header="Description" />
                    </DataTable>
        );
    }
}

export default function Table(): JSX.Element {
    return new DigitalNomadsTableData().create();
}