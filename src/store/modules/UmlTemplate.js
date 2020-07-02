/* @flow */

const actions: any = {
  selectTemplate(context: any, prop: string) {
    context.dispatch('plantumlEditor/renderUML', context.state[prop], {
      root: true,
    })
  },
}

const state: any = {
  useCase: `@startuml

actor A
actor B

A -up-> (up)
A -right-> (center)
A -down-> (down)
A -left-> (left)

B -up-> (up)
B -left-> (center)
B -right-> (right)
B -down-> (down)

@enduml`,
  ActivityB: `@startuml

|A Section|
start
:step1;
|#AntiqueWhite|B Section|
:step2;
:step3;
|A Section|
:step4;
|B Section|
:step5;
stop

@enduml`,
  Activity: `@startuml

start

:step 1;

if (try) then (true)
  :step 2;
  :step 3;
else (false)
  :error;
  end
endif

stop

@enduml`,
  Sequence: `@startuml

autonumber

A -> B: step

activate B
B -> C: step

activate C
C --> C: action
C -> B: step
deactivate C

B -> A: step
deactivate B

@enduml`,
  Object: `@startuml

object Car
object Bus
object Tire
object Engine
object Driver

Car <|- Bus
Car *-down- Tire
Car *-down- Engine
Bus o-down- Driver

@enduml`,
  Class: `@startuml

class Car {
  color
  model
  +start()
  #run()
  #stop()
}

Car <|- Bus
Car *-down- Tire
Car *-down- Engine
Bus o-down- Driver

@enduml`,
  ER: `@startuml

entity Customer  {
  + id (PK)
  --
  name
  mail
}

entity Order  {
  + id (PK)
  --
  # customer id (FK)
  order date
}

entity "Order Detail" as OrderDetail {
  + id (PK)
  --
  # order id  (FK)
  price without tax
}

Customer -right-o{ Order
Order ||-right-|{ OrderDetail

@enduml`,
}

export default {
  namespaced: true,
  state,
  actions,
}
