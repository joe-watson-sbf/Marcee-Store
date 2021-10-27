import { Typography } from '@material-ui/core';
import Categories from './Categories/Categories';
import TableProduct from './TableProduct/TableProduct';
function Home() {

    return(
        <>
            <div className="home">
                <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                    Category Shop Product
                </Typography>
                <Categories/>
                <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                    Marcee Fashion
                </Typography>
                <TableProduct/>
            </div>
            
        </>
    )
}

export default Home;