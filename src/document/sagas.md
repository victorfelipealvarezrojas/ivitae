# Gestionar transacciones con [SAGAS PATTERN]

## Este capítulo cubre
- Por qué las transacciones distribuidas no son adecuadas para las aplicaciones modernas.
- Uso del patrón Saga para mantener la consistencia de datos en una arquitectura de microservicios.
- Coordinación de sagas mediante coreografía y orquestación.
- Uso de contramedidas para hacer frente a la falta de aislamiento.

Cuando Mary comenzó a investigar la arquitectura de microservicios, una de sus mayores preocupaciones fue cómo implementar transacciones que abarcaran varios servicios. Las transacciones son un ingrediente esencial de cada aplicación empresarial. Sin transacciones, sería imposible mantener la consistencia de los datos.
Las transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) simplifican en gran medida el trabajo del desarrollador al proporcionar la ilusión de que cada transacción tiene acceso exclusivo a los datos. En una arquitectura de microservicios, las transacciones que están dentro de un solo servicio aún pueden usar transacciones ACID. Sin embargo, el desafío radica en implementar transacciones para operaciones que actualizan datos propiedad de varios servicios.

Por ejemplo, como se describe en el capítulo 2, la operación createOrder() abarca numerosos servicios, incluidos Order Service, Kitchen Service y Accounting Service. Operaciones como estas necesitan un mecanismo de gestión de transacciones que funcione en varios servicios.

Mary descubrió que, como se menciona en el capítulo 2, el enfoque tradicional para la gestión de transacciones distribuidas no es una buena opción para las aplicaciones modernas. En lugar de transacciones ACID, una operación que abarca varios servicios debe utilizar lo que se conoce como una saga, una secuencia impulsada por mensajes de transacciones locales, para mantener la consistencia de datos. Un desafío con las sagas es que son ACD (Atomicidad, Consistencia, Durabilidad). Carecen de la característica de aislamiento de las transacciones ACID tradicionales. Como resultado, una aplicación debe utilizar lo que se conocen como contramedidas, técnicas de diseño que previenen o reducen el impacto de anomalías de concurrencia causadas por la falta de aislamiento.

De muchas maneras, el mayor obstáculo que Mary y los desarrolladores de FTGO enfrentarán al adoptar microservicios es pasar de una base de datos única con transacciones ACID a una arquitectura de varias bases de datos con sagas ACD. Están acostumbrados a la simplicidad del modelo de transacción ACID. Pero en realidad, ni siquiera las aplicaciones monolíticas como la aplicación FTGO suelen utilizar transacciones ACID de libro de texto. Por ejemplo, muchas aplicaciones utilizan un nivel de aislamiento de transacción más bajo para mejorar el rendimiento. Además, muchos procesos comerciales importantes, como la transferencia de dinero entre cuentas en diferentes bancos, son eventualmente consistentes. Ni siquiera Starbucks utiliza la confirmación en dos fases (www.enterpriseintegrationpatterns.com/ramblings/18_starbucks.html).

Comienzo este capítulo examinando los desafíos de la gestión de transacciones en la arquitectura de microservicios y explico por qué el enfoque tradicional para la gestión de transacciones distribuidas no es una opción. Luego explico cómo mantener la consistencia de datos usando sagas. Después, analizo las dos formas diferentes de coordinar sagas: coreografía, donde los participantes intercambian eventos sin un punto de control centralizado, y orquestación, donde un controlador centralizado indica a los participantes de la saga qué operación realizar. Discuto cómo utilizar contramedidas para prevenir o reducir el impacto de anomalías de concurrencia causadas por la falta de aislamiento entre sagas. Finalmente, describo la implementación de un ejemplo de saga.

Comencemos echando un vistazo al desafío de gestionar transacciones en una arquitectura de microservicios.

# Transaction management in a microservice

Casi todas las solicitudes manejadas por una aplicación empresarial se ejecutan dentro de una transacción de base de datos. Los desarrolladores de aplicaciones empresariales utilizan marcos y bibliotecas que simplifican la gestión de transacciones. Algunos marcos y bibliotecas proporcionan una API programática para comenzar, confirmar y deshacer transacciones explícitamente. Otros marcos, como el framework Spring, proporcionan un mecanismo declarativo. Spring proporciona una anotación @Transactional que organiza que las invocaciones de métodos se ejecuten automáticamente dentro de una transacción. Como resultado, es fácil escribir lógica de negocios transaccional.

O, para ser más precisos, la gestión de transacciones es sencilla en una aplicación monolítica que accede a una sola base de datos. La gestión de transacciones es más desafiante en una aplicación monolítica compleja que utiliza múltiples bases de datos y brokers de mensajes. Y en una arquitectura de microservicios, las transacciones abarcan múltiples servicios, cada uno de los cuales tiene su propia base de datos. En esta situación, la aplicación debe utilizar un mecanismo más elaborado para gestionar las transacciones. Como aprenderás, el enfoque tradicional de utilizar transacciones distribuidas no es una opción viable para las aplicaciones modernas. En su lugar, una aplicación basada en microservicios debe utilizar sagas.

Antes de explicar sagas, veamos primero por qué la gestión de transacciones es un desafío en una arquitectura de microservicios.

> [NOTE:] [El enfoque tradicional de utilizar transacciones distribuidas, como las transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), no es una opción viable para las aplicaciones modernas, especialmente aquellas basadas en arquitecturas de microservicios, por varias razones:

>Complejidad y escalabilidad: Las transacciones distribuidas pueden volverse extremadamente complejas y difíciles de escalar a medida que aumenta el número de servicios y bases de datos involucrados. La coordinación de transacciones entre múltiples servicios puede generar cuellos de botella y afectar el rendimiento de la aplicación.

>Acoplamiento y dependencia: Las transacciones distribuidas pueden introducir un alto grado de acoplamiento entre los servicios, lo que dificulta la modificación y evolución independiente de cada componente de la aplicación. Además, las transacciones distribuidas pueden generar dependencias entre los servicios, lo que puede dificultar la implementación de cambios y la adopción de nuevas tecnologías.

>Consistencia y disponibilidad: Las transacciones distribuidas pueden comprometer la consistencia y la disponibilidad de los datos, especialmente en entornos altamente distribuidos y con alta concurrencia. La necesidad de coordinar transacciones a través de múltiples servicios puede aumentar la posibilidad de conflictos y errores de concurrencia, lo que puede afectar la integridad de los datos y la disponibilidad de la aplicación.

>Complejidad de implementación: La implementación y gestión de transacciones distribuidas puede ser compleja y propensa a errores, especialmente en entornos distribuidos y con alta concurrencia. Los desarrolladores deben lidiar con problemas como la gestión de bloqueos, la propagación de errores y la compensación de transacciones, lo que puede aumentar la complejidad y el riesgo de errores en el código.

>En resumen, el enfoque tradicional de utilizar transacciones distribuidas puede no ser adecuado para las aplicaciones modernas, especialmente aquellas basadas en arquitecturas de microservicios, debido a su complejidad, escalabilidad limitada y riesgo de comprometer la consistencia y la disponibilidad de los datos. En su lugar, las aplicaciones modernas tienden a utilizar patrones como sagas para gestionar la consistencia de los datos de manera más eficiente y escalable en entornos distribuidos.
]

> [NOTE: ] [Una transacción distribuida es una transacción que abarca múltiples recursos o servicios distribuidos en una red de computadoras. En el contexto de bases de datos, una transacción distribuida implica la actualización o manipulación de datos en múltiples bases de datos que pueden estar ubicadas en diferentes servidores o ubicaciones físicas.

>En una transacción distribuida, las operaciones que forman parte de la transacción pueden involucrar a diferentes recursos distribuidos, como bases de datos, sistemas de archivos, servicios web u otros componentes de la aplicación. Estas operaciones pueden estar distribuidas geográficamente y ejecutarse en diferentes nodos o servidores de la red.

>Una transacción distribuida debe garantizar que todas las operaciones que la componen se ejecuten de manera coherente y que se cumplan las propiedades ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad). Esto significa que todas las operaciones dentro de la transacción deben realizarse correctamente o ninguna de ellas, la consistencia de los datos debe mantenerse en todo momento, las operaciones de la transacción deben estar aisladas de otras transacciones concurrentes y los cambios realizados deben ser permanentes incluso en caso de fallos del sistema.

>La gestión de transacciones distribuidas puede ser compleja debido a la necesidad de coordinar las operaciones en diferentes recursos y garantizar la coherencia y la integridad de los datos en entornos distribuidos y con alta concurrencia. Se utilizan diferentes técnicas y protocolos para garantizar la consistencia y la atomicidad de las transacciones distribuidas, como el protocolo de confirmación en dos fases (Two-Phase Commit, 2PC) y el protocolo de confirmación en tres fases (Three-Phase Commit, 3PC).]

>[NOTE:][Las transacciones concurrentes se refieren a múltiples transacciones que se ejecutan simultáneamente en un sistema de base de datos, donde cada transacción realiza operaciones de lectura y escritura en los mismos datos compartidos. Estas transacciones pueden ser independientes entre sí o pueden compartir recursos comunes, como registros de bases de datos, archivos o memoria.]

# The need for distributed transactions in a microservice architecture
Imagina que eres el desarrollador de FTGO responsable de implementar la operación del sistema `createOrder()`. Como se describe en el capítulo 2, esta operación debe verificar que el consumidor pueda realizar un pedido, verificar los detalles del pedido, autorizar la tarjeta de crédito del consumidor y crear un pedido en la base de datos. Es relativamente sencillo implementar esta operación en la aplicación monolítica de FTGO. Todos los datos necesarios para validar el pedido están fácilmente accesibles. Además, puedes utilizar una transacción ACID para garantizar la consistencia de los datos. Podrías utilizar la anotación `@Transactional` de Spring en el método de servicio `createOrder()`.

En contraste, implementar la misma operación en una arquitectura de microservicios es mucho más complicado. Como muestra la figura 4.1, los datos necesarios están dispersos en varios servicios. La operación `createOrder()` accede a datos en numerosos servicios. Lee datos del Servicio del Consumidor y actualiza datos en el Servicio de Pedidos, Servicio de Cocina y Servicio de Contabilidad.

Dado que cada servicio tiene su propia base de datos, necesitas utilizar un mecanismo para mantener la consistencia de los datos en esas bases de datos.

# The trouble with distributed transactions
El enfoque tradicional para mantener la consistencia de los datos entre múltiples servicios, bases de datos o brokers de mensajes es utilizar transacciones distribuidas. El estándar de facto para la gestión de transacciones distribuidas es el Modelo de Procesamiento de Transacciones Distribuidas de X/Open (DTP) (X/Open XA, ver https://en.wikipedia.org/wiki/X/Open_XA). XA utiliza el compromiso en dos fases (2PC) para asegurar que todos los participantes en una transacción confirmen o retrocedan. Una pila de tecnología compatible con XA consta de bases de datos y brokers de mensajes compatibles con XA, controladores de bases de datos y API de mensajería, y un mecanismo de comunicación entre procesos que propaga el ID de transacción global XA. La mayoría de las bases de datos SQL son compatibles con XA, al igual que algunos brokers de mensajes. Las aplicaciones Java EE, por ejemplo, pueden utilizar JTA para realizar transacciones distribuidas.




