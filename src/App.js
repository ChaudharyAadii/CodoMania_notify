import './App.css';
import { useState, useEffect } from 'react';
import Blocks from './Components/Blocks';
import Blocks2 from './Components/Blocks2';
import Header from './Components/Header';
import Footer from './Components/Footer';



export default function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch('https://kontests.net/api/v1/code_chef')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://kontests.net/api/v1/leet_code')
      .then(response => response.json())
      .then(data2 => {
        console.log(data2);
        setData2(data2);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://codeforces.com/api/contest.list')
      .then(response => response.json())
      .then(data3 => {
        var contestArray = data3.result;
        console.log(contestArray);
        setData3(contestArray);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }, []);


  return (
    <>
      <Header />
      &nbsp; <br />
      &nbsp; <br />
      &nbsp; <br />
      &nbsp; <br />
      <div className='whole'>
        <div className='codechef'>
          <h1 id='heading'>CodeChef</h1>
          <Blocks data={data} />
        </div>
        <div className='leetcode'>
          <h1 id='heading'>LeetCode</h1>
          <Blocks data={data2} />
        </div>
        <div className='codeforces'>
          <h1 id='heading'>CodeForces</h1>
          <Blocks2 data={data3} />
        </div>
      </div>
      <Footer />
    </>
  )
}