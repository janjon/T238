
public interface Observer {
	public void update(WeatherSubject subject);
	public void setObserverName(String observerName);
	public String getObserverName();
}
