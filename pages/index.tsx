import type { NextPage } from 'next'
import HeaderComponent from '../Components/HeaderComponent'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuWithHeader from '../Components/MenuWithHeader';

const rows = [
  { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
  { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
  { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
  { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
  { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
]

const Home: NextPage = () => {
  return (
    <MenuWithHeader>
        {/* <HeaderComponent /> */}

        <div style={{ height: 400, width: '100%' }}>
            <TableContainer component={ Paper }>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Descrição</TableCell>
                    <TableCell align="right">Última Atualização</TableCell>
                    <TableCell align="right">Saldo Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={ index }
                    >
                      <TableCell component="th" scope="row">
                        { row.description }
                      </TableCell>
                      <TableCell align="right">{ row.lastUpdate }</TableCell>
                      <TableCell align="right">{ row.totalBalance }</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
    </MenuWithHeader>
  )
}

export default Home
