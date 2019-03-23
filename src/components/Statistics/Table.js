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
                    {tableData.map((value, index) => <li key={index}
                                                                       className="d-flex justify-content-between align-items-center  flex-wrap text-white trending-table-row">
                        <div className="d-flex col-lg-3">
                            <div className="trending-table-side-description">Campaing</div>
                            <div>{value.Campaing}</div>
                        </div>
                        <div className="d-flex col-lg-1 ">
                            <div className="trending-table-side-description">Time</div>
                            <div>{value.Time}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">Views</div>
                            <div>
                                {
                                    Number(value.Views).toFixed(0).replace(/./g, function (c, i, a) {
                                        return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">Visitors</div>
                            <div>
                                {
                                    Number(value.Visitors).toFixed(0).replace(/./g, function (c, i, a) {
                                        return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">CTR</div>
                            <div>{value.CTR}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">CPC</div>
                            <div>{value.CPC}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">CPV</div>
                            <div>{value.CPV}</div>
                        </div>
                        <div className="col-lg-1 d-flex">
                            <div className="trending-table-side-description">CPM</div>
                            <div>{value.CPM}</div>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <div className="trending-table-side-description">Status</div>
                            <div className="d-flex align-items-center">
                                <div className={value.Status === 'Active' ? 'is-active' : 'is-unActive'}/>
                                <div>{value.Status}</div>
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