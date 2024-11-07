package shopflowproservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wsu.workorderproservice.dto.ServiceResponseDTO;
import com.wsu.workorderproservice.service.ServiceService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import static com.wsu.workorderproservice.utilities.Constants.MESSAGE;

import java.util.Map;

@RestController
@RequestMapping("/service")
@RequiredArgsConstructor
@Slf4j
public class ServiceController {
    private final ServiceService serviceService;

    @GetMapping
    public ResponseEntity<ServiceResponseDTO> getServices(@RequestParam(required = false) boolean isActive) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Services retrieved successfully."))
                .data(serviceService.get(isActive)).build(), HttpStatus.OK);
    }
}
