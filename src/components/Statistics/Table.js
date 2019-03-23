import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
    state = {
        tableData: this.props.table,
        activeSort: '',
        headerData: [
            {text: 'Campaing', className: 'col-lg-3', id: 1},
            {text: 'Time', className: 'col-lg-1', id: 2},
            {text: 'Views', className: 'col-lg-1', id: 3},
            {text: 'Visitors', className: 'col-lg-1', id: 4},
            {text: 'CTR', className: 'col-lg-1', id: 5},
            {text: 'CPC', className: 'col-lg-1', id: 6},
            {text: 'CPV', className: 'col-lg-1', id: 7},
            {text: 'CPM', className: 'col-lg-1', id: 8},
            {text: 'Status', className: 'col-lg-2', id: 9}
        ]
    };

    customSort = event => {
        const { tableData } = this.state;
        let sortedArr = tableData.sort((a, b) => {
            let columnSort = event.target.innerText;
            if (a[columnSort] > b[columnSort]) {
                return 1;
            }
            if (a[columnSort] < b[columnSort]) {
                return -1;
            }
            return 0;
        });
        this.setState({
            trendingData: sortedArr,
            activeSort: event.target.innerText
        });
    };

    render() {
        const { headerData, tableData } = this.state;
        return (
            <div className="table-wrap">
                <ul className="table-wrap__list">
                    <li className="d-flex align-items-center justify-content-between gray table-head">
                        {headerData.map( (item) => {
                            return (
                                <div key={item.id}
                                     className={`d-flex ${item.className} ${this.state.activeSort === item.text ? 'text-white' : ''}`}>
                                    <div onClick={this.customSort}>{item.text}</div>
                                    <div>{this.state.activeSort === item.text ? <i className="fas fa-angle-up"></i> :
                                        <i className="fas fa-angle-down"></i>}</div>
                                </div>
                            )
                        })}
                    </li>
                    {tableData.map((item) => <li key={item.id} className="d-flex justify-content-between align-items-center flex-wrap text-white table-row">
                        <div className="d-flex col-lg-3">
                            <div>{item.Campaing}</div>
                        </div>
                        <div className="d-flex col-lg-1 ">
                            <div>{item.Time}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.Views}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.Visitors}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.CTR}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.CPC}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.CPV}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div>{item.CPM}</div>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <div className="d-flex align-items-center">
                                <div className={item.Status === 'Active' ? 'is-active' : 'disabled'}/>
                                <div>{item.Status}</div>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        table: state.table
    }
};

export default connect(mapStateToProps, {})(Table);