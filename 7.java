/* Experiment 8: Write a program to generate and test Random Numbers */

import java.io.*;
import java.util.*;

// Random no. generation using Linear Congruential Method

class Random
{
	public static void main(String args[])
		throws IOException
	{
		//initialization
		double a, c, m,n,dpos = 0 ,dneg = 0;
		double[] x=new double[6];
                double[] r=new double[6];

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		//inputs from user
		System.out.println("Enter multiplier constant a ");
		a = Double.parseDouble(br.readLine());
		System.out.println("Enter addition constant c ");
		c = Double.parseDouble(br.readLine());
		System.out.println("Enter modulus constant m");
		m = Double.parseDouble(br.readLine());
		System.out.println("Enter number of Random Numbers you want to generate");
		n = Double.parseDouble(br.readLine());

		//Assumed value
		x[0] = 27; 
		
		//Loop to print value of X using Linear Congruential Method
		for(int i=1; i<=n;i++)
		{
			x[i]=((a*x[i-1]+c)%m);
			System.out.println("X values"+ x[i]);
				
		}

		//Loop to print Random numbers
		for(int i=1; i<=n;i++)
		{
			r[i] = (x[i] / m);
			System.out.println("Random Numbers"+ r[i]);
				
		}

		//Array Sorting
                Arrays.sort(r);
                	System.out.println("Sorted random nos. are ");
                	for(double number : r)
               	 	{
				System.out.println(number);
			}

		//Testing Random Numbers using Kolmogorov-Smirnov test
		
		for(int i=1; i<=n; i++)
		{
			dpos = dpos + ((i/n)-r[i]);
		}
		System.out.println("D Positive"+dpos);
		
		
		for(int i=1; i<=n; i++)
		{
			dneg = dneg + (r[i]- ((i-1)/n));
		}
		System.out.println("D Negative"+ dneg);
		
		double d = Math.max(dpos, dneg);
		double dalpha = 0.565; // given critical value
		if(d>dalpha)
		{
			System.out.println("Value Rejected");
		}
		else
			System.out.println("Value Accepted");

	}

}

/*Output:
Enter multiplier constant a 
8
Enter addition constant c 
47
Enter modulus constant m
100
Enter number of Random Numbers you want to generate
5

X values 63.0
X values 51.0
X values 55.0
X values 87.0
X values 43.0

Random Numbers 0.63
Random Numbers 0.51
Random Numbers 0.55
Random Numbers 0.87
Random Numbers 0.43

Sorted random nos. are 
0.0
0.43
0.51
0.55
0.63
0.87

D Positive0.010000000000000009
D Negative0.99

Value Rejected
*/