import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Mentor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String expertise;
    private boolean available;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL)
    private List<Rating> ratings = new ArrayList<>();

    public double getAverageRating() {
        return ratings.isEmpty() ? 0 : ratings.stream().mapToDouble(Rating::getStars).average().orElse(0);
    }
}
