import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author lzz
 *
 */
public abstract class WeatherSubject {
	public List<Observer> observers = new ArrayList<Observer>();
	
	public void attach(Observer observer) {
		observers.add(observer);
	}
	
	public void dettach(Observer observer) {
		observers.remove(observer);
	}
	
	public abstract void notifyObserver();
}
