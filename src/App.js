import './App.css';
import { useState } from 'react';

function App() {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentNum, setCurrentNum] = useState("_ __");

  function getNumber() {
    let b = false;

    while (!b) {
        let randomNumber = Math.floor(Math.random() * 76);
        if (!drawnNumbers.includes(randomNumber)) {
            return randomNumber;
        }
        if (drawnNumbers.length > 75) {
            return;
        }
    }
}

function callNextNumber() {
  if (!gameStarted) {
    setGameStarted(true);
  }

  if (drawnNumbers.length > 75) {
    alert("No more numbers to draw!")
  }

  let num = getNumber();
  setDrawnNumbers([...drawnNumbers, num])

  var table = document.getElementById('table');

  for (let i = 0, row; row = table.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
        if (col.innerText === num.toString()) {
            col.classList.add('visible');
        }
    }
  }

  if (num >= 1 && num <= 15) {
    setCurrentNum("B " + num.toString())
  }

  if (num >= 16 && num <= 30) {
    setCurrentNum("I " + num.toString())
  }

  if (num >= 31 && num <= 45) {
    setCurrentNum("N " + num.toString())
  }

  if (num >= 46 && num <= 60) {
    setCurrentNum("G " + num.toString())
  }

  if (num >= 61 && num <= 75) {
    setCurrentNum("O " + num.toString())
  }
  
}

function restartGame() {
  setDrawnNumbers([])
  var table = document.getElementById('table');
  for (let i = 0, row; row = table.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
        col.classList.remove('visible');
    }
  }
  setCurrentNum("_ __");
  setGameStarted(false)
}
  return (
    <div className="App">
      <div className="bingo">
            <div className="header-area">
                <h1 className="welcome">B I N G O</h1>
                <h1 className="num" id="called-number">{currentNum}</h1>
                <button id="next" className="next" onClick={callNextNumber}>{gameStarted ? "Draw Number" : "Start"}</button>
                <button id="restart" className="restart" onClick={restartGame}>Restart</button>
            </div>
        <div className="bingo-table">
            <table border={1} frame="void" rules="row" id="table">
                <tr>
                    <th>B</th>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                </tr>
                <tr>
                    <th>I</th>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                <tr>
                    <th>N</th>
                    <td>31</td>
                    <td>32</td>
                    <td>33</td>
                    <td>34</td>
                    <td>35</td>
                    <td>36</td>
                    <td>37</td>
                    <td>38</td>
                    <td>39</td>
                    <td>40</td>
                    <td>41</td>
                    <td>42</td>
                    <td>43</td>
                    <td>44</td>
                    <td>45</td>
                </tr>
                <tr>
                    <th>G</th>
                    <td>46</td>
                    <td>47</td>
                    <td>48</td>
                    <td>49</td>
                    <td>50</td>
                    <td>51</td>
                    <td>52</td>
                    <td>53</td>
                    <td>54</td>
                    <td>55</td>
                    <td>56</td>
                    <td>57</td>
                    <td>58</td>
                    <td>59</td>
                    <td>60</td>
                </tr>
                <tr>
                    <th>O</th>
                    <td>61</td>
                    <td>62</td>
                    <td>63</td>
                    <td>64</td>
                    <td>65</td>
                    <td>66</td>
                    <td>67</td>
                    <td>68</td>
                    <td>69</td>
                    <td>70</td>
                    <td>71</td>
                    <td>72</td>
                    <td>73</td>
                    <td>74</td>
                    <td>75</td>
                </tr>
            </table>
        </div>
    </div>
    </div>
  );
}

export default App;
