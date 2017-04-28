import java.util.*;

class mutual {

	public static void main(String args[]) {
	int n,flag=0;	
	Scanner sc = new Scanner(System.in);

	System.out.println("Enter the number of process: ");
	n=sc.nextInt();
	
	for(int i=1;i<=n;i++)
	{
	while(flag!=1) {
	Random rand = new Random(); 
	int value = rand.nextInt(2);
	if (value==1)
	{
	try {
	System.out.println(" ACESS GRANTED \n Process "+i+" is entering the criticals section\n");
	Thread.sleep(2000);
	System.out.println(" Process "+i+" is leaving the critical section\n");
	}
	catch (Exception e) {
	System.out.println("Error: "+e);
	}
	flag=1;
	}
	else if(value==0)
	{
	System.out.println("\nACESS DENIED");
	flag=0;
	}
	}
flag=0;
	
	}	
	
	}

}