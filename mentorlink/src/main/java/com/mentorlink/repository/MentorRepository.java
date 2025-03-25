import org.springframework.data.jpa.repository.JpaRepository;
import com.mentorlink.model.Mentor;

public interface MentorRepository extends JpaRepository<Mentor, Long> {
}
