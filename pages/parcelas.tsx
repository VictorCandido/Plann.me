import { Box, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import MenuWithHeader from "../Components/MenuWithHeader";

const rows = [
    { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
    { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
    { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
    { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
    { description: 'Descrição 1', lastUpdate: '20/03/2022', totalBalance: 13000 },
  ]

const Parcelas: React.FC = () => {
    return (
        <MenuWithHeader>
            <Card style={{ padding:'10px' }}>
                <Typography variant="h4" noWrap>
                    Parcelas
                </Typography>

                <TableContainer component={ Paper }>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Descrição</TableCell>
                                <TableCell>Pagos/Total</TableCell>
                                <TableCell>Valor/Parcela</TableCell>
                                <TableCell>Descrição</TableCell>
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
            </Card>
        </MenuWithHeader>
    );
}

export default Parcelas;