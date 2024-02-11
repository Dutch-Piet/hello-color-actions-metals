const hello = () => `
<p style="font-size: 16px;"
>Hello World from the Great White North! <br> 
This is Dutch Piet from Toronto, Canada. <br> 
updated test: 2024-02-11-4:43
<br>
README: <br> 
1) This page fetches the commodity spot price from www.DailyMetalPrice.com. for the following metals used in a battery <br>
      - Copper (Cu)<br> 
      - Nickel (Ni) <br>
      - Zinc (Zn) <br>
2) The user can then transcribe those values into the calculator table and add the qty of each metal used in the battery. <br>
3) When the 'calculate' button is pressed, the table updates to compute extended costs for each metal and the grand total cost for the product.
</p>
`;
console.log(hello());
exports.hello = hello;
