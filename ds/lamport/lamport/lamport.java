import java.util.*;
import java.util.Scanner;

public class lamport{
int e[][]=new int[10][10];
int en[][]=new int[10][10];
int ev[]=new int[10];
int i,p,j,k;
HashMap<Integer,Integer> hm=new HashMap<Integer,Integer>();

public void calc(){
Scanner sc=new Scanner(System.in);
System.out.println("Enter the number of process:");
p=sc.nextInt();
System.out.println("Enter the no of events per process:");
for(i=1;i<=p;i++)
{
  ev[i]=sc.nextInt();
}
System.out.println("Enter the relationship:");
for(i=1;i<=p;i++)
{
System.out.println("For process:"+i);
  for(j=1;j<=ev[i];j++)
    {
    System.out.println("For event:"+(j));
    int input=sc.nextInt();
    k=i*10+j;
    hm.put(k,input);
    if(j==1)
        en[i][j]=1;
    }
}
for(i=1;i<=p;i++)
{
  for(j=2;j<=ev[i];j++)
    {
     k=i*10+j;
     if(hm.get(k)==0)
     {
     en[i][j]=en[i][j-1]+1;
     }
     else
     {
     int a=hm.get(k);
         int p1=a/10;
     int e1=a%10;
      if(en[p1][e1]>en[i][j-1])
        en[i][j]=en[p1][e1]+1;
       else
        en[i][j]=en[i][j-1]+1;
     }
 }
}
System.out.println("-----------Result------------");
for(i=1;i<=p;i++)
{
System.out.println("Process "+i);
  for(j=1;j<=ev[i];j++)
    {
    System.out.println(en[i][j]);
    }
}
}
public static void main(String[] args){
lamport lam=new lamport();
lam.calc();
}
}
