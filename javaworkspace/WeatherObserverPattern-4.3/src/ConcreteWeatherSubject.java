import java.util.Observable;

/**
 * 天气目标的具体实现类
 * 
 * @author lzz
 *
 */
public class ConcreteWeatherSubject extends Observable {
	private String content;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
		//天气情况有了，就要通知所有观察者
		this.setChanged();
		
		this.notifyObservers(content);
	}
}
