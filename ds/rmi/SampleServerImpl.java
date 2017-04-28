/* SampleServerImpl.java */
import java.rmi.*;
import java.rmi.server.*;
import java.rmi.registry.*;

public class SampleServerImpl extends UnicastRemoteObject implements SampleServer
{
  SampleServerImpl() throws RemoteException
  {
     super();
  }

	public int sum(int a,int b,int c) throws RemoteException
	{
		int d=0;
		switch(c) {	
		case 1:	d=a+b;
			break;
		case 2:	d=a-b;
			break;
		case 3:	d=a*b;
			break;
		case 4:	d=a/b;
			break;
		}
		return d;
	}	


	/* SampleServerImpl.java */
  public static void main(String args[])
  {
      try
      {
        System.setSecurityManager(new RMISecurityManager());
        //set the security manager

        //create a local instance of the object
        SampleServerImpl Server = new SampleServerImpl();

        //put the local instance in the registry
        Naming.rebind("SAMPLE-SERVER" , Server);

        System.out.println("Server waiting.....");
      }
      catch (java.net.MalformedURLException me)       {
        System.out.println("Malformed URL: " + me.toString());   }
      catch (RemoteException re)  {
         System.out.println("Remote exception: " + re.toString());  }
  }
}