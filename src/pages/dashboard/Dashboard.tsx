import {
    Button,
    Card,
    Col,
    message,
    Row,
    Statistic,
} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import SurveyStatisticBox from "./StatisticBox";
// import ExportJsonExcel from 'js-export-excel'
import exportFromJSON from 'export-from-json'
import {apiListLoanApplication, apiLoadExportData1, apiLoadStatisticLoan} from "../../api/Api";
import StatisticBox from "./StatisticBox";


const Dashboard = () => {
    const {t} = useTranslation();
    const [surveyList, setSurveyList] = useState([])
    const [totalUserBase, setTotalUserBase] = useState(0)
    const navigate = useNavigate()
    const [totalApply, setTotalApply] = useState(0)
    const [sumLoanApply, setSumLoanApply] = useState(0)
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [applyList, setApplyList] = useState([])

    useEffect(() => {
        loadAllData();

        return (() => {

        })

    }, []);

    const loadAllData = () => {
        apiLoadStatisticLoan({}).then((res: any) => {
            if (res.code === 0) {
                setTotalApply(res.data.total)
                setSumLoanApply(res.data.total_amount)
            }
        })

        let params = {
            pageIndex,
            pageSize
        }
        apiListLoanApplication(params).then((res: any) => {
            if (res.code === 0) {
                setApplyList(res.data.applyList)
            }
        })
    };

    /**
     * export excel file
     */
    const onDownload = () => {
        apiLoadExportData1({}).then((res: any) => {
            if (res.code === 0) {
                const data = res.data.dataList
                const fileName = 'download'
                const exportType = exportFromJSON.types.xls
                exportFromJSON({data, fileName, exportType})
            }
        });
    }

    return (
        <div>
            <div>dashboard</div>
            <Row gutter={10}>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <Card>
                        <Statistic title="Total Loan Apply" value={totalApply} valueStyle={{color: '#3f8600'}}/>
                    </Card>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <Card>
                        <Statistic title="Total Loan Amount" value={sumLoanApply} valueStyle={{color: '#3f8600'}}/>
                    </Card>
                </Col>
            </Row>

            <div style={{marginTop: 20}}>
                <Button type='primary' onClick={() => {
                    onDownload()
                }}>Download Applications</Button>
            </div>

            {/*<Row>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="container"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c2"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c3"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c4"></div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}


            <Card title="Loan Application Statistic" style={{marginTop: 20}}>
                {
                    applyList.length > 0 ?
                        applyList.map((item, index) => (
                            <StatisticBox item={item} key={index}/>
                        )) : null
                }
            </Card>


        </div>
    );
};
export default Dashboard;
