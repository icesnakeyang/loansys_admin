import {Card, Col, Row, Tag} from "antd";
import moment from "moment";

const StatisticBox = (data: any) => {
    const {item} = data
    return (
        <Card style={{marginTop: 10}}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    yourName:{item.yourName}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    contactNumber: {item.contactNumber}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    {moment(item.createTime).format("ll")}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    {item.email}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    employerName:{item.employerName}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    jobTitle:{item.jobTitle}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    loanAmount:{item.loanAmount}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    location:{item.location}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    monthlySalary:{item.monthlySalary}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    salaryMethod:{item.salaryMethod}
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                    {item.balanceTransfer ? <Tag>Balance Transfer</Tag> : null}
                    {item.businessLoan ? <Tag>Business Loan</Tag> : null}
                    {item.collateralizedLoan ? <Tag>Collateralized Loan</Tag> : null}
                    {item.personalLoan ? <Tag>PersonalLoan Loan</Tag> : null}
                </Col>
            </Row>
        </Card>
    )
}
export default StatisticBox
