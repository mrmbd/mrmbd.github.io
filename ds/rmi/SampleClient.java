import java.rmi.*;
import java.rmi.server.*;
import java.util.*;
public class SampleClient  
{
   public static void main(String[]  args)
   {
	Scanner s = new Scanner(System.in);	
      // set the security manager for the client
      System.setSecurityManager(new RMISecurityManager());
      //get the remote object from the registry
      try
        {
          System.out.println("Security Manager loaded");
          String url = "//localhost/SAMPLE-SERVER";
          SampleServer remoteObject = (SampleServer)Naming.lookup(url);
          System.out.println("Got remote object");
          System.out.println("1.Add\n2.Sub\n3.Mul\4.Div");
	 System.out.println("Enter two number");
	int a = s.nextInt();
	int b = s.nextInt();
System.out.println("Enter the choice");
		
int nn=s.nextInt();
	 System.out.println(" ANS= " + remoteObject.sum(a,b,nn) );
        }
        catch (RemoteException exc) {
          System.out.println("Error in lookup: " + exc.toString()); }
        catch (java.net.MalformedURLException exc) {
          System.out.println("Malformed URL: " + exc.toString());   }
        catch (java.rmi.NotBoundException exc)  {
          System.out.println("NotBound: " + exc.toString());
        }
   }
}
