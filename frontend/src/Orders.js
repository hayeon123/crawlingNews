import React,{ useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import http from './http-commons';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
//   createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
//   createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
//   createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];

//const rows = [];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

// function getNews() {
//   http.get('/')
//   .then(response => {
//     console.log(response.data);
//     // alert(response.data);
//     // response.data.map(row => {
//     //   rows.push(row);
//     // });
//     // console.log("rows", rows);
//     return response.data;
//   }).catch(() => {
//     alert("뉴스 데이터를 가져오지 못했습니다.");
//   })
// }

export default function Orders(props) {
  const classes = useStyles();
  const [rows] = useState([]);
  function getNews() {
    http.get('/')
    .then(response => {
      console.log(response.data);
      //alert(response.data);
      response.data.map(row => {
        rows.push(row);
      });
      console.log("rows", rows);
      //return response.data;
    }).catch(() => {
      alert("뉴스 데이터를 가져오지 못했습니다.");
    })
  }
  useEffect(() => {
    getNews();
    console.log(rows);
  }, []);
  console.log("rows", rows);
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell> */}
            <TableCell>Title</TableCell>
            <TableCell>Desc</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            // <TableRow key={row.id}>
            //   <TableCell>{row.date}</TableCell>
            //   <TableCell>{row.name}</TableCell>
            //   <TableCell>{row.shipTo}</TableCell>
            //   <TableCell>{row.paymentMethod}</TableCell>
            //   <TableCell align="right">{row.amount}</TableCell>
            // </TableRow>
            <TableRow key = {row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>{rows}</p>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}