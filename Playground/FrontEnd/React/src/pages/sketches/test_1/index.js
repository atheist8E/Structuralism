// import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

// import { Neo4jProvider, createDriver, useReadCypher } from 'use-neo4j'
// // Create driver instance
// const driver = createDriver('neo4j', 'localhost', 7687, 'neo4j', 'jabberwocky')

// function MyComponent({ title }) {
//   const query = `MATCH (m:Movie {title: $title}) RETURN m`;
//   const params = { title }; // Use the title prop passed to the component

//   const { loading, first, error } = useReadCypher(query, params);

//   if (loading) return <div>Loading...</div>;

//   if (error) {
//     console.error("Error fetching movie:", error.message); // Handle potential errors
//     // Display a user-friendly message or try again
//     return <div>An error occurred while fetching the movie.</div>;
//   }

//   const movie = first?.get('m'); // Use optional chaining to handle potential null values

//   if (!movie) {
//     return <div>No movie found with title <q>{title}.</q></div>;
//   }

//   return (
//     <div>
//       {movie.properties.title} was released in {movie.properties.released.toString()}
//     </div>
//   );
// }

// MyComponent.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// const Test_1 = () => {

//   return (
//     <Grid item xs={12}>
//       <MainCard sx={{ mt: 2 }} content={false}>
//         <Neo4jProvider driver={driver}>
//           <MyComponent title = {"The Replacements"}></MyComponent>
//           {/* {typeof title !== 'undefined' && <MyComponent title="The Replacements" />} */}
//         </Neo4jProvider>
//       </MainCard>
//     </Grid>
//   );
// };

const Test_1 = () => {

  return (
    <Grid item xs={12}>
      <MainCard sx={{ mt: 2 }} content={false}>
      </MainCard>
    </Grid>
  );
};

export default Test_1;
